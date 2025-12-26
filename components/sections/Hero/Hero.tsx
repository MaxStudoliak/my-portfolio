'use client';

import { Box, Container, Typography, Button, Card, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SocialLinks from '@/components/shared/SocialLinks';
import { Person, Code, Work, Folder, ContactMail, Download } from '@mui/icons-material';

export default function Hero() {
  const { t } = useLanguage();

  const variants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: t.nav.about, icon: <Person /> },
    { id: 'skills', label: t.nav.skills, icon: <Code /> },
    { id: 'experience', label: t.nav.experience, icon: <Work /> },
    { id: 'projects', label: t.nav.projects, icon: <Folder /> },
    { id: 'contact', label: t.nav.contact, icon: <ContactMail /> },
  ];

  return (
    <Box
      sx={{
        minHeight: { xs: 'auto', md: '90vh' },
        py: { xs: 8, md: 0 },
        display: 'flex',
        alignItems: 'center',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #0a1929 0%, #1e2a38 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          variants={variants.container}
          initial="hidden"
          animate="visible"
          sx={{ textAlign: 'center', color: 'white' }}
        >
          {/* Title - Main heading */}
          <Box component={motion.div} variants={variants.item}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 1,
              }}
            >
              {t.hero.mainTitle}
            </Typography>
          </Box>

          {/* Subtitle */}
          <Box component={motion.div} variants={variants.item}>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.8rem' },
                mb: { xs: 3, md: 4 },
                opacity: 0.85,
                fontWeight: 400,
              }}
            >
              {t.hero.subtitle}
            </Typography>
          </Box>

          {/* Description */}
          <Box component={motion.div} variants={variants.item}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                mb: 4,
                maxWidth: '700px',
                mx: 'auto',
                opacity: 0.85,
              }}
            >
              {t.hero.description}
            </Typography>
          </Box>

          {/* Desktop Buttons */}
          <Box
            component={motion.div}
            variants={variants.item}
            sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, justifyContent: 'center', mb: 3 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
              }}
              onClick={() => scrollToSection('projects')}
            >
              {t.hero.viewWork}
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
              }}
              onClick={() => scrollToSection('contact')}
            >
              {t.hero.contactMe}
            </Button>
          </Box>

          {/* Mobile Navigation Buttons - Column layout */}
          <Box
            component={motion.div}
            variants={variants.item}
            sx={{ display: { xs: 'block', md: 'none' }, mb: 3 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                maxWidth: '400px',
                mx: 'auto',
                px: 2,
              }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  startIcon={item.icon}
                  variant="outlined"
                  fullWidth
                  disableRipple
                  sx={{
                    py: 1.5,
                    px: 3,
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderRadius: 2,
                    justifyContent: 'flex-start',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    WebkitTapHighlightColor: 'transparent',
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.6)',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      transform: 'translateX(8px)',
                    },
                    '&:active': {
                      transform: 'scale(0.98)',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '& .MuiButton-startIcon': {
                      marginRight: 2,
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Social Links */}
          <Box component={motion.div} variants={variants.item}>
            <SocialLinks iconColor="white" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
