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
  Tabs,
  Tab,
} from '@mui/material';
import { GitHub, Launch, PlayCircleOutline, AutoAwesome, Code as CodeIcon } from '@mui/icons-material';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useState } from 'react';

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'frontend' | 'automation'>('all');

  const projects = [
    // Frontend projects
    {
      title: t.projects.projectOne,
      description: t.projects.projectOneDesc,
      technologies: ['React', 'TypeScript', 'Material UI'],
      github: null,
      demo: null,
      category: 'frontend',
    },
    {
      title: t.projects.projectTwo,
      description: t.projects.projectTwoDesc,
      technologies: ['React', 'TypeScript', 'Ionic'],
      github: null,
      demo: null,
      category: 'frontend',
    },
    {
      title: t.projects.projectThree,
      description: t.projects.projectThreeDesc,
      technologies: ['React', 'TypeScript', 'Material UI'],
      github: null,
      demo: null,
      category: 'frontend',
    },
    {
      title: t.projects.projectFour,
      description: t.projects.projectFourDesc,
      technologies: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'PostgreSQL', 'AI'],
      github: null,
      demo: 'https://finance-tracker-frontend-sigma.vercel.app',
      category: 'frontend',
    },
    {
      title: t.projects.projectFive,
      description: t.projects.projectFiveDesc,
      technologies: ['React', 'TypeScript', 'Tailwind', 'Socket.io', 'Express', 'PostgreSQL'],
      github: 'https://github.com/MaxStudoliak/task-flow',
      demo: 'https://task-flow-frontend-kappa-sandy.vercel.app',
      category: 'frontend',
    },
    {
      title: t.projects.projectSix,
      description: t.projects.projectSixDesc,
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'Express', 'PostgreSQL'],
      github: 'https://github.com/MaxStudoliak/shop-hub',
      demo: 'https://shop-hub-frontend-omega.vercel.app',
      category: 'frontend',
    },

    // AI Automation projects
    {
      title: t.projects.automationOne,
      description: t.projects.automationOneDesc,
      technologies: ['Make.com', 'Tally', 'Airtable', 'Router', 'Text Parser', 'Slack', 'Gmail'],
      github: null,
      demo: null,
      image: '/automation_one.png',
      loomUrl: 'https://www.loom.com/share/2594941ed0694ccb961fce350a91ba98',
      category: 'automation',
    },
    {
      title: t.projects.automationTwo,
      description: t.projects.automationTwoDesc,
      technologies: ['Make.com', 'Tally', 'Airtable', 'Google Gemini', 'JSON', 'Router', 'Slack', 'Gmail'],
      github: null,
      demo: null,
      image: '/automation_two.png',
      loomUrl: 'https://www.loom.com/share/36e36a156fa94b5c9488a559754e2a85',
      category: 'automation',
    },
    {
      title: t.projects.automationThree,
      description: t.projects.automationThreeDesc,
      technologies: ['Make.com', 'Gmail', 'OpenAI', 'JSON', 'Tools', 'Router', 'Google Gemini', 'Airtable'],
      github: null,
      demo: null,
      image: '/automation_three.png',
      loomUrl: 'https://www.loom.com/share/b38c077308384deea3542a8e3ea33e82',
      category: 'automation',
    },
  ];

  const filteredProjects = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <Box id="projects" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <ScrollReveal>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
            }}
          >
            {t.projects.title}
          </Typography>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={0.1}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <Tabs
              value={filter}
              onChange={(_, newValue) => setFilter(newValue)}
              // variant='scrollable'
              // scrollButtons='auto'
              // allowScrollButtonsMobile
              sx={{
                '& .MuiTabs-indicator': {
                  height: 3,
                },
                '& .MuiTab-root': {
                  minHeight: { xs: 42, sm: 48 },
                  minWidth: { xs: 70, sm: 110 },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  px: { xs: 1.5, sm: 3 },
                },
                // minHeight: 48,
                // maxWidth: '100%',
              }}
            >
              <Tab
                label="All Projects"
                value="all"
                sx={{ textTransform: 'none', fontSize: '1rem' }}
              />
              <Tab
                label="Frontend"
                value="frontend"
                icon={<CodeIcon sx={{ fontSize: 20 }} />}
                iconPosition="start"
                sx={{ textTransform: 'none', fontSize: '1rem' }}
              />
              <Tab
                label="AI Automation"
                value="automation"
                icon={<AutoAwesome sx={{ fontSize: 20 }} />}
                iconPosition="start"
                sx={{ textTransform: 'none', fontSize: '1rem' }}
              />
            </Tabs>
          </Box>
        </ScrollReveal>

        {/* Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                  },
                }}
              >
                {/* Image with Loom overlay - ТОЛЬКО ДЛЯ AUTOMATION */}
                {project.image && (
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: project.loomUrl ? 'pointer' : 'default',
                      height: 240, // Фиксированная высота
                      bgcolor: 'background.paper',
                    }}
                    onClick={() => project.loomUrl && window.open(project.loomUrl, '_blank')}
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain', // contain вместо cover - покажет весь скриншот
                        transition: 'transform 0.3s',
                        bgcolor: 'grey.100',
                        '&:hover': {
                          transform: project.loomUrl ? 'scale(1.02)' : 'none',
                        },
                      }}
                    />

                    {/* Play иконка ТОЛЬКО если есть loomUrl */}
                    {project.loomUrl && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          color: 'white',
                          bgcolor: 'rgba(0,0,0,0.6)',
                          borderRadius: '50%',
                          p: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s',
                          '&:hover': {
                            bgcolor: 'rgba(0,0,0,0.8)',
                            transform: 'translate(-50%, -50%) scale(1.1)',
                          },
                        }}
                      >
                        <PlayCircleOutline sx={{ fontSize: 48 }} />
                      </Box>
                    )}
                  </Box>
                )}

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  {/* Category badge */}
                  <Chip
                    label={project.category === 'automation' ? 'AI Automation' : 'Frontend'}
                    color={project.category === 'automation' ? 'secondary' : 'primary'}
                    size="small"
                    sx={{ mb: 1.5 }}
                  />

                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      minHeight: { xs: 'auto', md: 80 },
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Technologies - ПОКАЗЫВАЕМ ВСЕ */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: '0.7rem' }}
                      />
                    ))}
                  </Box>
                </CardContent>

                {/* Actions - БЕЗ LOOM КНОПКИ (только play иконка на изображении) */}
                <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
                  {project.github && (
                    <Button
                      size="small"
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
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


