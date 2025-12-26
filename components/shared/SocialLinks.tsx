'use client';

import { Box, IconButton, SxProps, Theme } from '@mui/material';
import { GitHub, Telegram } from '@mui/icons-material';
import DjinniIcon from '@/components/icons/DjinniIcon';

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface SocialLinksProps {
  iconColor?: string;
  iconSx?: SxProps<Theme>;
  containerSx?: SxProps<Theme>;
}

export default function SocialLinks({ iconColor, iconSx, containerSx }: SocialLinksProps) {
  const socialLinks: SocialLink[] = [
    {
      icon: <GitHub />,
      url: 'https://github.com/MaxStudoliak',
      label: 'GitHub',
    },
    {
      icon: <DjinniIcon />,
      url: 'https://djinni.co/my/wizard/profile/',
      label: 'Djinni',
    },
    {
      icon: <Telegram />,
      url: 'https://t.me/max_stdlk',
      label: 'Telegram',
    },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', ...containerSx }}>
      {socialLinks.map((link, index) => (
        <IconButton
          key={index}
          href={link.url}
          target={link.url !== '#' ? '_blank' : undefined}
          rel={link.url !== '#' ? 'noopener noreferrer' : undefined}
          aria-label={link.label}
          sx={{ color: iconColor, ...iconSx }}
        >
          {link.icon}
        </IconButton>
      ))}
    </Box>
  );
}
