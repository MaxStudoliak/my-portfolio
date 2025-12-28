'use client';

import { useState } from 'react';
import {
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
  Popover,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Share,
  ContentCopy,
  Facebook,
  Twitter,
  LinkedIn,
  WhatsApp,
  Telegram,
  Email,
} from '@mui/icons-material';
import InstagramIcon from '@/components/icons/InstagramIcon';
import { useLanguage } from '@/contexts/LanguageContext';

interface ShareButtonProps {
  url?: string;
  title?: string;
}

interface ShareOption {
  name: string;
  icon: React.ReactNode;
  color: string;
  action: (url: string, title: string) => void;
}

export default function ShareButton({ url, title }: ShareButtonProps) {
  const { t } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = title || 'Check out my portfolio!';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const showSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setOpenSnackbar(true);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      showSnackbar(t.share.linkCopied);
      handleClose();
    } catch (err) {
      console.error('Failed to copy:', err);
      showSnackbar('Failed to copy link');
    }
  };

  const shareOptions: ShareOption[] = [
    {
      name: t.share.copyLink,
      icon: <ContentCopy />,
      color: '#6B7280',
      action: handleCopyLink,
    },
    {
      name: 'Facebook',
      icon: <Facebook />,
      color: '#1877F2',
      action: (url) => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        handleClose();
      },
    },
    {
      name: 'Twitter',
      icon: <Twitter />,
      color: '#1DA1F2',
      action: (url, title) => {
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          '_blank'
        );
        handleClose();
      },
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      color: '#0A66C2',
      action: (url) => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        handleClose();
      },
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon />,
      color: '#E4405F',
      action: (url) => {
        handleClose();

        // Try to open Instagram
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
          // Try to open Instagram app on mobile
          window.location.href = 'instagram://';
          // Fallback to web if app not installed
          setTimeout(() => {
            window.open('https://www.instagram.com/', '_blank');
          }, 1000);
        } else {
          // On desktop, open Instagram web
          window.open('https://www.instagram.com/', '_blank');
        }
      },
    },
    {
      name: 'WhatsApp',
      icon: <WhatsApp />,
      color: '#25D366',
      action: (url, title) => {
        window.open(
          `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
          '_blank'
        );
        handleClose();
      },
    },
    {
      name: 'Telegram',
      icon: <Telegram />,
      color: '#0088cc',
      action: (url, title) => {
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          '_blank'
        );
        handleClose();
      },
    },
    {
      name: 'Email',
      icon: <Email />,
      color: '#EA4335',
      action: (url, title) => {
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
        handleClose();
      },
    },
  ];

  return (
    <>
      <Tooltip title="Share portfolio">
        <IconButton
          onClick={handleClick}
          sx={{
            color: 'text.primary',
            border: 1,
            borderColor: 'divider',
            borderRadius: 2,
            '&:hover': {
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderColor: 'transparent',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <Share />
        </IconButton>
      </Tooltip>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          mt: 1,
        }}
      >
        <Box
          sx={{
            p: 2,
            minWidth: 250,
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(10, 25, 41, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              mb: 1,
              px: 2,
              color: 'text.secondary',
            }}
          >
            {t.share.title}
          </Typography>
          <List sx={{ p: 0 }}>
            {shareOptions.map((option) => (
              <ListItem key={option.name} disablePadding>
                <ListItemButton
                  onClick={() => option.action(shareUrl, shareTitle)}
                  sx={{
                    borderRadius: 1,
                    mb: 0.5,
                    '&:hover': {
                      backgroundColor: 'action.hover',
                      '& .MuiListItemIcon-root': {
                        color: option.color,
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: 'text.secondary',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {option.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={option.name}
                    primaryTypographyProps={{
                      fontSize: '0.9rem',
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Popover>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        ContentProps={{
          sx: {
            mb: 2,
          },
        }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{
            width: '100%',
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
