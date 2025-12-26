'use client';

import { Box, Container, Typography, Link } from '@mui/material';
import { useLanguage } from '@/contexts/LanguageContext';
import SocialLinks from '@/components/shared/SocialLinks';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <SocialLinks iconSx={{ color: 'primary.main' }} containerSx={{ gap: 1 }} />

          <Typography variant="body2" color="text.secondary" align="center">
            {currentYear} {t.footer.name}. {t.footer.rights}.
          </Typography>

          <Typography variant="body2" color="text.secondary" align="center">
            {t.footer.builtWith}{' '}
            <Link href="https://reactjs.org/" target="_blank" rel="noopener">
              React
            </Link>
            {' & '}
            <Link href="https://mui.com/" target="_blank" rel="noopener">
              Material UI
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
