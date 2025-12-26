'use client';

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import { Email, Phone, LocationOn, Send, Download } from '@mui/icons-material';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';
import ScrollReveal from '@/components/ui/ScrollReveal';

const CONTACT_EMAIL = 'studolakmaksim8@gmail.com';

export default function Contact() {
  const { t } = useLanguage();
  const router = useRouter();

  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setMessage('');
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: t.contact.email,
      value: CONTACT_EMAIL,
    },
    {
      icon: <Phone />,
      title: t.contact.phone,
      value: '+380 (93) 225-43-20',
    },
    {
      icon: <LocationOn />,
      title: t.contact.location,
      value: t.contact.city,
    },
  ];

  return (
    <Box id="contact" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <ScrollReveal>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            {t.contact.title}
          </Typography>
        </ScrollReveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
          }}
        >
          <ScrollReveal delay={0.1}>
            <Box>
              <Typography variant="h6" gutterBottom>
                {t.contact.subtitle}
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                {t.contact.description}
              </Typography>

              <Box sx={{ mt: 4 }}>
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        color: 'primary.main',
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        {info.title}
                      </Typography>
                      <Typography variant="body1">{info.value}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label={t.contact.message}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  margin="normal"
                  multiline
                  rows={7}
                  required
                  placeholder={t.contact.description}
                  InputLabelProps={{
                    sx: {
                      '&.MuiInputLabel-shrink': {
                        transform: 'translate(14px, -9px) scale(0.75)',
                        backgroundColor: 'background.paper',
                        px: 0.5,
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<Send />}
                  disableRipple
                  sx={{
                    mt: 2,
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    borderRadius: 2,
                    boxShadow: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '0 6px 20px rgba(59, 130, 246, 0.35)'
                        : '0 6px 20px rgba(102, 126, 234, 0.35)',
                    border: 'none',
                    outline: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '0 10px 28px rgba(59, 130, 246, 0.45)'
                          : '0 10px 28px rgba(102, 126, 234, 0.45)',
                    },
                    '&:active': {
                      transform: 'translateY(-1px) scale(0.98)',
                    },
                    '&:focus': {
                      outline: 'none',
                    },
                    '& .MuiButton-endIcon': {
                      marginLeft: 1.5,
                    },
                  }}
                >
                  {t.contact.send}
                </Button>
              </form>
            </Paper>
          </ScrollReveal>
        </Box>

        {/* Download CV Button */}
        <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<Download />}
            onClick={() => router.push('/resume')}
            disableRipple
            sx={{
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontWeight: 600,
              px: 6,
              py: 2.5,
              fontSize: '1.1rem',
              borderRadius: 3,
              boxShadow: (theme) =>
                theme.palette.mode === 'dark'
                  ? '0 8px 24px rgba(59, 130, 246, 0.4)'
                  : '0 8px 24px rgba(102, 126, 234, 0.4)',
              border: 'none',
              outline: 'none',
              WebkitTapHighlightColor: 'transparent',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: (theme) =>
                  theme.palette.mode === 'dark'
                    ? '0 12px 32px rgba(59, 130, 246, 0.5)'
                    : '0 12px 32px rgba(102, 126, 234, 0.5)',
              },
              '&:active': {
                transform: 'translateY(-2px) scale(0.98)',
              },
              '&:focus': {
                outline: 'none',
              },
              '& .MuiButton-startIcon': {
                fontSize: '1.5rem',
              },
            }}
          >
            {t.hero.downloadCV}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
