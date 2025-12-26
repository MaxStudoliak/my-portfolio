import { Box } from '@mui/material';

interface DjinniIconProps {
  sx?: object;
}

export default function DjinniIcon({ sx }: DjinniIconProps) {
  return (
    <Box
      component="img"
      src="https://djinni.co/static/favicons/v03/favicon-196x196.png"
      alt="Djinni"
      sx={{
        width: 24,
        height: 24,
        objectFit: 'contain',
        ...sx,
      }}
    />
  );
}
