'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Brightness4, Brightness7, Language, Menu as MenuIcon, Close } from '@mui/icons-material';
import { useThemeContext } from '@/components/ThemeRegistry';
import { useLanguage } from '@/contexts/LanguageContext';

const GRADIENT = {
  dark: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
  light: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
};

const iconButtonStyles = {
  ml: 1,
  color: 'text.primary',
  border: 1,
  borderColor: 'divider',
  borderRadius: 2,
  '&:hover': {
    background: (theme: any) =>
      theme.palette.mode === 'dark' ? GRADIENT.dark : GRADIENT.light,
    color: 'white',
    borderColor: 'transparent',
  },
  transition: 'all 0.3s ease',
};

export default function Header() {
  const { mode, toggleTheme } = useThemeContext();
  const { locale, setLocale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const toggleLanguage = () => setLocale(locale === 'en' ? 'uk' : 'en');
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(10, 25, 41, 0.8)'
              : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          boxShadow: (theme) =>
            theme.palette.mode === 'dark'
              ? '0 4px 30px rgba(0, 0, 0, 0.3)'
              : '0 4px 30px rgba(0, 0, 0, 0.1)',
          borderBottom: (theme) =>
            `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                background: GRADIENT.light,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
              }}
            >
              {t.hero.title}
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: 'text.primary',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': {
                      background: (theme) =>
                        theme.palette.mode === 'dark' ? GRADIENT.dark : GRADIENT.light,
                      color: 'white',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Language Toggle */}
            <IconButton
              onClick={toggleLanguage}
              sx={{ ...iconButtonStyles, display: { xs: 'none', sm: 'flex' }, ml: 2 }}
              title={locale === 'en' ? 'Українська' : 'English'}
            >
              <Language />
              <Typography variant="caption" sx={{ ml: 0.5, fontSize: '0.7rem', fontWeight: 600 }}>
                {locale.toUpperCase()}
              </Typography>
            </IconButton>

            {/* Theme Toggle */}
            <IconButton
              onClick={toggleTheme}
              sx={{ ...iconButtonStyles, display: { xs: 'none', sm: 'flex' } }}
            >
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ ...iconButtonStyles, display: { xs: 'flex', md: 'none' } }}
              aria-label="open menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(10, 25, 41, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: GRADIENT.light,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t.hero.title}
            </Typography>
            <IconButton onClick={handleDrawerToggle}>
              <Close />
            </IconButton>
          </Box>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    '&:hover': {
                      background: (theme) =>
                        theme.palette.mode === 'dark' ? GRADIENT.dark : GRADIENT.light,
                      color: 'white',
                      '& .MuiListItemText-primary': { color: 'white' },
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontSize: '1rem', fontWeight: 500 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 3, display: 'flex', gap: 1, justifyContent: 'center' }}>
            <IconButton onClick={toggleLanguage} sx={iconButtonStyles}>
              <Language />
              <Typography variant="caption" sx={{ ml: 0.5, fontSize: '0.7rem', fontWeight: 600 }}>
                {locale.toUpperCase()}
              </Typography>
            </IconButton>

            <IconButton onClick={toggleTheme} sx={iconButtonStyles}>
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
