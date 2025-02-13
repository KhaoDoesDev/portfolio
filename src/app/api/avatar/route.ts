import { NextResponse } from "next/server";
import sharp from "sharp";

export async function GET() {
  try {
    const res = await fetch(
      "https://avatars.githubusercontent.com/u/62739017?v=4",
      {
        next: {
          revalidate: 86400, // Cache for 24 hours
        },
        headers: {
          "Cache-Control": "public, max-age=86400",
        },
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch avatar: ${res.status} ${res.statusText}`);
    }

    const image = await res.arrayBuffer();
    const resizedImage = await sharp(image)
      .resize(96, 96, {
        fit: "cover",
        position: "center",
      })
      .webp({ quality: 90 }) // Convert to WebP for better compression
      .toBuffer();

    return new NextResponse(resizedImage, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=86400, immutable",
        "Last-Modified": new Date().toUTCString(),
      },
    });
  } catch (error) {
    console.error("Avatar fetch error:", error);
    return new NextResponse("Failed to fetch avatar", { status: 500 });
  }
}
