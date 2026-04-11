import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kanta Numa - BtoB Business Growth Partner';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#171717',
          padding: '80px 100px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-2px',
              lineHeight: 1.1,
            }}
          >
            Kanta Numa
          </div>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 500,
              color: '#a8a29e',
              letterSpacing: '-0.5px',
            }}
          >
            BtoB Business Growth Partner
          </div>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '16px',
            }}
          >
            {['Sales', 'Marketing', 'Technology'].map((label) => (
              <div
                key={label}
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#10b981',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '100px',
            fontSize: '18px',
            color: '#78716c',
          }}
        >
          cloudfit.co.jp
        </div>
      </div>
    ),
    { ...size }
  );
}
