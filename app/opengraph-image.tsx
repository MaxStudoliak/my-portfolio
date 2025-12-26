import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Max Studoliak - Frontend Developer Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          padding: '40px',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>Max Studoliak</div>
        <div style={{ fontSize: 48, opacity: 0.9 }}>Frontend Developer</div>
        <div
          style={{
            fontSize: 32,
            marginTop: 40,
            opacity: 0.8,
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          React • TypeScript • Next.js • Material-UI
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
