'use client';

import { Box, Container, Typography, Paper, Chip, Grid } from '@mui/material';
import { Code, Devices, Speed, AutoAwesome, Webhook, Psychology, Lightbulb } from '@mui/icons-material';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function About() {
  const { t } = useLanguage();

  const features = [
    // Frontend features
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: t.about.cleanCode,
      description: t.about.cleanCodeDesc,
      category: 'frontend',
    },
    {
      icon: <Devices sx={{ fontSize: 40 }} />,
      title: t.about.responsive,
      description: t.about.responsiveDesc,
      category: 'frontend',
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: t.about.performance,
      description: t.about.performanceDesc,
      category: 'frontend',
    },
    // {
    //   icon: <Lightbulb sx={{ fontSize: 40 }} />,
    //   title: t.about.innovation,
    //   description: t.about.innovationDesc,
    //   category: 'frontend',
    // },
    // AI Automation features (NEW)
    {
      icon: <AutoAwesome sx={{ fontSize: 40 }} />,
      title: t.about.aiAutomation,
      description: t.about.aiAutomationDesc,
      category: 'automation',
      featured: false, // Highlight this
    },
    {
      icon: <Psychology sx={{ fontSize: 40 }} />,
      title: t.about.smartWorkflows,
      description: t.about.smartWorkflowsDesc,
      category: 'automation',
    },
    {
      icon: <Webhook sx={{ fontSize: 40 }} />,
      title: t.about.integration,
      description: t.about.integrationDesc,
      category: 'automation',
    },
  ];

  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <ScrollReveal>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 700,
              }}
            >
              {t.about.title}
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                mb: 3,
                maxWidth: '700px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.15rem' },
                fontWeight: 400,
              }}
            >
              {t.about.subtitle}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                px: { xs: 2, md: 0 },
                lineHeight: 1.7,
              }}
            >
              {t.about.description}
            </Typography>
          </Box>
        </ScrollReveal>

        {/* Features Grid */}
        <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
              <ScrollReveal delay={index * 0.1}>
                <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
                  <Paper
                    elevation={feature.featured ? 4 : 2}
                    sx={{
                      p: { xs: 3, md: 4 },
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: feature.featured ? '2px solid' : 'none',
                      borderColor: feature.featured ? 'primary.main' : 'transparent',
                      bgcolor: feature.featured ? 'action.selected' : 'background.paper',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: (theme) => theme.shadows[8],
                      },
                      '&::before': feature.featured ? {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: (theme) =>
                          `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      } : {},
                    }}
                  >
                    {/* Category badge */}
                    {feature.featured && (
                      <Chip
                        label="Featured"
                        size="small"
                        color="primary"
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          fontSize: '0.7rem',
                        }}
                      />
                    )}

                    {/* Icon */}
                    <Box
                      sx={{
                        color: feature.category === 'automation' ? 'secondary.main' : 'primary.main',
                        mb: 2,
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'scale(1.1) rotate(5deg)',
                        },
                      }}
                    >
                      {feature.icon}
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                      }}
                    >
                      {feature.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                        fontSize: { xs: '0.875rem', md: '0.95rem' },
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </Box>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>

        {/* Stats section (NEW) */}
        {/* <ScrollReveal delay={0.6}>
          <Box
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 2,
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(66, 165, 245, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)'
                  : 'linear-gradient(135deg, rgba(66, 165, 245, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%)',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Grid container spacing={4} sx={{ textAlign: 'center' }}>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    background: (theme) =>
                      `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                  }}
                >
                  5+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.hero.stats.automations}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    background: (theme) =>
                      `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                  }}
                >
                  15+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.hero.stats.hoursSaved}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    background: (theme) =>
                      `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                  }}
                >
                  99%
                </Typography>
        <Typography variant="body2" color="text.secondary">
          {t.hero.stats.accuracy}
        </Typography>
      </Grid>
    </Grid>
          </Box >
        </ScrollReveal > */}
      </Container >
    </Box >
  );
}
