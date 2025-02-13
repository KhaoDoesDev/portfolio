import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

// Ensure the route runs on the Edge runtime
export const runtime = 'edge';

async function loadGoogleFont(fontURL: string) {
  const css = await (await fetch(fontURL)).text()
  const resource = /src: url\((.+)\) format\('(opentype|truetype)'\)/.exec(css);
 
  if (resource) {
    const response = await fetch(resource[1]!)
    if (response.status == 200) {
      return await response.arrayBuffer()
    }
  }
 
  throw new Error('failed to load font data')
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  
  // Extract parameters from query
  const title = searchParams.get('title') ?? "Khao's Portfolio";
  const name = searchParams.get('name') ?? 'Khao';
  const url = searchParams.get('url') ?? 'https://khaodoes.dev/';
  const avatar = searchParams.get('avatar') ?? 'https://khaodoes.dev/api/avatar'; // Replace with actual avatar URL

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '1200px',
          height: '630px',
          backgroundColor: '#000',
          color: 'white',
					border: "6px solid #ccc",
          fontFamily: 'Inter, sans-serif',
					fontWeight: "bolder",
          padding: '50px',
        }}
      >
        {/* Title */}
        <div style={{ fontSize: 80, fontFamily: "InterBold", lineHeight: 1.2 }}>
          {title}
        </div>

        {/* Footer Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Avatar */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            style={{
              borderRadius: '50%',
            }}
						width={86}
						height={86}
						src={avatar}
						alt={`Khao's Avatar`}
          />

          {/* Name & URL */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 48, fontFamily: "InterBold" }}>{name}</span>
            <span style={{ fontSize: 24, color: '#ccc', fontFamily: "Inter" }}>{url}</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
			fonts: [
				{
					name: 'InterBold',
					data: await loadGoogleFont('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,700&display=swap'),
					style: 'normal',
				},
				{
					name: 'Inter',
					data: await loadGoogleFont('https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap'),
					style: 'normal',
				},
			],
    }
  );
}
