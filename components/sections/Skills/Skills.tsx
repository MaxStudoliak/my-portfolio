// 'use client';

// import { Box, Container, Typography, Chip, Paper } from '@mui/material';
// import { useLanguage } from '@/contexts/LanguageContext';
// import ScrollReveal from '@/components/ui/ScrollReveal';

// export default function Skills() {
//   const { t } = useLanguage();

//   const skillCategories = [
//     {
//       category: t.skills.core,
//       skills: ['JavaScript', 'TypeScript', 'HTML/CSS'],
//     },
//     {
//       category: t.skills.frameworks,
//       skills: ['React', 'Next.js', 'Material UI', 'Ionic'],
//     },
//     {
//       category: t.skills.tools,
//       skills: ['GitHub', 'Figma', 'VS Code', 'ToggleTrack', 'Vercel', 'Railway'],
//     },
//     {
//       category: t.skills.soft,
//       skills: [t.skills.teamCollaboration, t.skills.agileScrum, t.skills.problemSolving],
//     },
//     {
//       category: t.skills.automation,
//       skills: ['Make.com', 'Google Gemini', 'Anthropic Claude', 'Airtable', 'n8n'],
//     },
//   ];

//   return (
//     <Box id="skills" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
//       <Container maxWidth="lg">
//         <ScrollReveal>
//           <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, fontSize: { xs: '2rem', md: '2.5rem' } }}>
//             {t.skills.title}
//           </Typography>
//         </ScrollReveal>

//         <Box
//           sx={{
//             display: 'grid',
//             gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
//             gap: 4,
//           }}
//         >
//           {skillCategories.map((category, index) => (
//             <ScrollReveal key={index} delay={index * 0.1}>
//               <Paper
//                 elevation={2}
//                 sx={{
//                   p: 3,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   height: '100%',
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   gutterBottom
//                   sx={{ color: 'primary.main', mb: 2 }}
//                 >
//                   {category.category}
//                 </Typography>
//                 <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//                   {category.skills.map((skill, skillIndex) => (
//                     <Chip
//                       key={skillIndex}
//                       label={skill}
//                       color="primary"
//                       variant="outlined"
//                       sx={{ fontWeight: 500 }}
//                     />
//                   ))}
//                 </Box>
//               </Paper>
//             </ScrollReveal>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }

'use client';

import { Box, Container, Typography, Chip, Paper } from '@mui/material';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: t.skills.frontend,
      skills: ['JavaScript', 'TypeScript', 'HTML/CSS', "React", "Next.js", "Material UI", "Ionic"],
    },
    {
      category: t.skills.tools,
      skills: ['GitHub', 'Figma', 'VS Code', 'ToggleTrack', 'Vercel', 'Railway'],
    },
    {
      category: t.skills.soft,
      skills: [t.skills.teamCollaboration, t.skills.agileScrum, t.skills.problemSolving],
    },
    {
      category: t.skills.automation,
      skills: ['Make.com', 'Google Gemini', 'Anthropic Claude', 'Grok', 'Airtable', 'n8n'],
    },
  ];

  return (
    <Box id="skills" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <ScrollReveal>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            {t.skills.title}
          </Typography>
        </ScrollReveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            },
            gap: 3,
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  minHeight: '200px',
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: 'primary.main', mb: 2 }}
                >
                  {category.category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      label={skill}
                      color="primary"
                      variant="outlined"
                      sx={{ fontWeight: 500 }}
                    />
                  ))}
                </Box>
              </Paper>
            </ScrollReveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}