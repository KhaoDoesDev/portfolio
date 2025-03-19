import { NextResponse } from "next/server";
import sharp from "sharp";

export const revalidate = 86400;

const GITHUB_AVATAR_URL =
  "https://avatars.githubusercontent.com/u/62739017?v=4";

export async function GET() {
  try {
    const res = await fetch(GITHUB_AVATAR_URL, {
      headers: { "User-Agent": "Next.js Avatar Proxy" },
    });
    if (!res.ok) throw new Error(`Failed to fetch avatar: ${res.status}`);

    const imageBuffer = await res.arrayBuffer();

    const processedImage = await sharp(imageBuffer)
      .resize(96, 96, { fit: "cover", position: "center" })
      .png()
      .toBuffer();

    return new NextResponse(processedImage, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
      },
    });
  } catch (error) {
    console.error("Avatar Fetch Error:", error);
    return new NextResponse("Error processing avatar", { status: 500 });
  }
}
