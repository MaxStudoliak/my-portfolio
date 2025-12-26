'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import { WorkOutline, School } from '@mui/icons-material';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

const GRADIENT = {
  dark: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
  light: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
};

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      icon: <WorkOutline sx={{ fontSize: 32 }} />,
      title: t.experience.jobTitle,
      company: t.experience.jobCompany,
      period: t.experience.jobPeriod,
      description: t.experience.jobDescription,
      achievements: [
        t.experience.jobAchievement1,
        t.experience.jobAchievement2,
        t.experience.jobAchievement3,
      ],
    },
    {
      icon: <School sx={{ fontSize: 32 }} />,
      title: t.experience.educationTitle,
      company: t.experience.educationCompany,
      period: t.experience.educationPeriod,
      description: t.experience.educationDescription,
      achievements: [],
    },
  ];

  return (
    <Box id="experience" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <ScrollReveal>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            {t.experience.title}
          </Typography>
        </ScrollReveal>

        <Box sx={{ position: 'relative', mt: 4 }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              transform: { md: 'translateX(-50%)' },
              top: 0,
              bottom: 0,
              width: '2px',
              background: (theme) =>
                theme.palette.mode === 'dark' ? GRADIENT.dark : GRADIENT.light,
            }}
          />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={index} delay={index * 0.2}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isEven ? 'flex-start' : 'flex-end',
                    mb: 6,
                    position: 'relative',
                  }}
                >
                  {/* Timeline dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: '11px', md: '50%' },
                      transform: { md: 'translateX(-50%)' },
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: (theme) =>
                        theme.palette.mode === 'dark' ? GRADIENT.dark : GRADIENT.light,
                      border: '3px solid',
                      borderColor: 'background.paper',
                      zIndex: 1,
                    }}
                  />

                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      width: { xs: '100%', md: '45%' },
                      ml: { xs: 6, md: isEven ? 0 : 'auto' },
                      mr: { md: isEven ? 'auto' : 0 },
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ color: 'primary.main', mr: 2 }}>{exp.icon}</Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          {exp.company}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {exp.period}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary" paragraph>
                      {exp.description}
                    </Typography>

                    {exp.achievements.length > 0 && (
                      <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                        {exp.achievements.map((achievement, i) => (
                          <Typography
                            key={i}
                            component="li"
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 1 }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Paper>
                </Box>
              </ScrollReveal>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
