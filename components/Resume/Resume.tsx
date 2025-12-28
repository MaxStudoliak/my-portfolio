'use client';

import { Box, Container, Typography, Button, Divider, Chip } from '@mui/material';
import { Download, Print, Close } from '@mui/icons-material';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

export default function Resume() {
  const { t, locale } = useLanguage();
  const router = useRouter();
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePrint = async () => {
    if (!resumeRef.current || isGenerating) return;
    if (typeof window === 'undefined') return;

    setIsGenerating(true);
    try {
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = html2pdfModule.default || html2pdfModule;

      const opt = {
        margin: 10,
        filename: `${t.footer.name.replace(/\s+/g, '_')}_Resume.pdf`,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
      };

      await html2pdf().set(opt).from(resumeRef.current).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      window.print();
    } finally {
      setIsGenerating(false);
    }
  };

  const handleClose = () => {
    router.push('/');
  };

  const skills = {
    core: ['JavaScript', 'TypeScript', 'HTML/CSS'],
    frameworks: ['React', 'Material UI', 'Ionic', 'Next.js'],
    tools: ['GitHub', 'Figma', 'ToggleTrack'],
  };

  return (
    <>
      {/* Print/Download buttons - hidden when printing */}
      <Box
        className="no-print"
        sx={{
          position: 'fixed',
          top: 20,
          right: 20,
          display: 'flex',
          gap: 2,
          zIndex: 1000,
          '@media print': {
            display: 'none',
          },
        }}
      >
        <Button
          variant="outlined"
          startIcon={<Close />}
          onClick={handleClose}
          sx={{ bgcolor: 'background.paper' }}
        >
          {locale === 'uk' ? 'Закрити' : 'Close'}
        </Button>
        <Button
          variant="contained"
          startIcon={<Download />}
          onClick={handlePrint}
          disabled={isGenerating}
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            '&:disabled': {
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              opacity: 0.6,
            },
          }}
        >
          {isGenerating
            ? locale === 'uk'
              ? 'Генерація...'
              : 'Generating...'
            : locale === 'uk'
              ? 'Зберегти PDF'
              : 'Save as PDF'}
        </Button>
      </Box>

      {/* Resume Content */}
      <Container
        maxWidth="md"
        sx={{
          py: { xs: 4, print: 0 },
          '@media print': {
            maxWidth: '100%',
            padding: 0,
          },
        }}
      >
        <Box
          ref={resumeRef}
          sx={{
            bgcolor: 'background.paper',
            p: { xs: 3, md: 6 },
            borderRadius: { xs: 2, print: 0 },
            boxShadow: { xs: 3, print: 'none' },
            '@media print': {
              padding: '20mm',
              boxShadow: 'none',
              borderRadius: 0,
            },
          }}
        >
          {/* Header */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 1,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                '@media print': {
                  color: '#667eea',
                  background: 'none',
                  WebkitTextFillColor: 'inherit',
                },
              }}
            >
              {t.footer.name}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
              {t.hero.subtitle}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t.hero.description}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Contact */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              {t.contact.title}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant="body2">
                📧 studolakmaksim8@gmail.com
              </Typography>
              <Typography variant="body2">
                📱 +380 (93) 225-43-20
              </Typography>
              <Typography variant="body2">
                📍 {t.contact.city}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* About */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              {t.about.title}
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              {t.about.description}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Experience */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              {t.experience.title}
            </Typography>

            {/* Job */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {t.experience.jobTitle}
              </Typography>
              <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                {t.experience.jobCompany} | {t.experience.jobPeriod}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, lineHeight: 1.8 }}>
                {t.experience.jobDescription}
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                  {t.experience.jobAchievement1}
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                  {t.experience.jobAchievement2}
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                  {t.experience.jobAchievement3}
                </Typography>
              </Box>
            </Box>

            {/* Education */}
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {t.experience.educationTitle}
              </Typography>
              <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                {t.experience.educationCompany} | {t.experience.educationPeriod}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                {t.experience.educationDescription}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Skills */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              {t.skills.title}
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                {t.skills.core}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.core.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      '@media print': {
                        border: '1px solid #667eea',
                        backgroundColor: 'transparent',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                {t.skills.frameworks}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.frameworks.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      '@media print': {
                        border: '1px solid #667eea',
                        backgroundColor: 'transparent',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                {t.skills.tools}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.tools.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      '@media print': {
                        border: '1px solid #667eea',
                        backgroundColor: 'transparent',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Projects */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              {t.projects.title}
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {t.projects.projectOne}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                {t.projects.projectOneDesc}
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {t.projects.projectTwo}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                {t.projects.projectTwoDesc}
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {t.projects.projectThree}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                {t.projects.projectThreeDesc}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          @page {
            size: A4;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}
