import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export async function GenerateImage(params: {
	title: string;
}) {
	const interBold = fetch(
    new URL("../fonts/Inter-Bold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const interRegular = fetch(
    new URL("../fonts/Inter-Regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

	return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          backgroundColor: '#000',
					height: '100%',
					width: '100%',
          padding: '50px',
					color: '#fff',
					fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Title */}
        <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.2 }}>
          {params.title}
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
						src="https://khaodoes.dev/api/avatar.png"
						alt={`Khao's Avatar`}
          />

          {/* Name & URL */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 32, fontWeight: 700 }}>KhaoDoesDev</span>
            <span style={{ fontSize: 24, color: '#ccc', fontWeight: 400 }}>khaodoes.dev</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
			fonts: [
				{
					name: 'InterBold',
					data: await interBold,
					style: 'normal',
					weight: 700
				},
				{
					name: 'Inter',
					data: await interRegular,
					style: 'normal',
					weight: 400
				},
			],
    }
  );
}