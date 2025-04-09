import { GenerateImage, size } from "@/lib/og-generator";

export const runtime = "edge";

export const alt = "Khao's Portfolio";
export const contentType = "image/png";

export { size };

export default async function Image() {
  return await GenerateImage({
    title: "Khao's Portfolio",
  });
}