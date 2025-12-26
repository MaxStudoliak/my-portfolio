'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import { Code, Devices, Speed, Lightbulb } from '@mui/icons-material';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: t.about.cleanCode,
      description: t.about.cleanCodeDesc,
    },
    {
      icon: <Devices sx={{ fontSize: 40 }} />,
      title: t.about.responsive,
      description: t.about.responsiveDesc,
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: t.about.performance,
      description: t.about.performanceDesc,
    },
    {
      icon: <Lightbulb sx={{ fontSize: 40 }} />,
      title: t.about.innovation,
      description: t.about.innovationDesc,
    },
  ];

  return (
    <Box id="about" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <ScrollReveal>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            {t.about.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              px: { xs: 2, md: 0 },
            }}
          >
            {t.about.description}
          </Typography>
        </ScrollReveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 3, md: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </ScrollReveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
