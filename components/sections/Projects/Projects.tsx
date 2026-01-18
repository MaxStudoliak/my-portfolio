'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.projectOne,
      description: t.projects.projectOneDesc,
      technologies: ['React', 'TypeScript', 'Material UI'],
      github: null,
      demo: null,
    },
    {
      title: t.projects.projectTwo,
      description: t.projects.projectTwoDesc,
      technologies: ['React', 'TypeScript', 'Ionic'],
      github: null,
      demo: null,
    },
    {
      title: t.projects.projectThree,
      description: t.projects.projectThreeDesc,
      technologies: ['React', 'TypeScript', 'Material UI'],
      github: null,
      demo: null,
    },
    {
      title: t.projects.projectFour,
      description: t.projects.projectFourDesc,
      technologies: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'PostgreSQL', 'AI'],
      github: null,
      demo: 'https://finance-tracker-frontend-sigma.vercel.app',
    },
    {
      title: t.projects.projectFive,
      description: t.projects.projectFiveDesc,
      technologies: ['React', 'TypeScript', 'Tailwind', 'Socket.io', 'Express', 'PostgreSQL'],
      github: 'https://github.com/MaxStudoliak/task-flow',
      demo: 'https://task-flow-frontend-kappa-sandy.vercel.app',
    },
    {
      title: t.projects.projectSix,
      description: t.projects.projectSixDesc,
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'Express', 'PostgreSQL'],
      github: 'https://github.com/MaxStudoliak/shop-hub',
      demo: 'https://shop-hub-frontend-omega.vercel.app',
    },
  ];

  return (
    <Box id="projects" sx={{ py: { xs: 4, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <ScrollReveal>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
            {t.projects.title}
          </Typography>
        </ScrollReveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: 2, sm: 2.5, md: 3 },
          }}
        >
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 2.5 }, pb: { xs: 1, md: 1.5 } }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontSize: { xs: '1.15rem', md: '1.5rem' },
                      mb: { xs: 1, md: 1.5 },
                      fontWeight: 600
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: { xs: 1.5, md: 2 },
                      fontSize: { xs: '0.875rem', md: '0.875rem' },
                      lineHeight: 1.6,
                      minHeight: { xs: 'auto', sm: '80px', md: '90px' }
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.75, md: 1 } }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: { xs: '0.7rem', md: '0.75rem' },
                          height: { xs: '24px', md: '26px' }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ px: { xs: 2, md: 2.5 }, pb: { xs: 2, md: 2 }, pt: 0, gap: 1 }}>
                  {project.github && (
                    <Button
                      size="small"
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.projects.code}
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="small"
                      startIcon={<Launch />}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.projects.demo}
                    </Button>
                  )}
                </CardActions>
              </Card>
            </ScrollReveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
