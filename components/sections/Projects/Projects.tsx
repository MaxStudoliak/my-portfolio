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
      github: '#',
      demo: '#',
    },
    {
      title: t.projects.projectTwo,
      description: t.projects.projectTwoDesc,
      technologies: ['React', 'TypeScript', 'Ionic'],
      github: '#',
      demo: '#',
    },
    {
      title: t.projects.projectThree,
      description: t.projects.projectThreeDesc,
      technologies: ['React', 'TypeScript', 'Material UI'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <Box id="projects" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <ScrollReveal>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            {t.projects.title}
          </Typography>
        </ScrollReveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
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
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
