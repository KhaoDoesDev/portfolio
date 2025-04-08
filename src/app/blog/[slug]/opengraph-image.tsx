import { GenerateImage, size } from "@/lib/og-generator";

export const runtime = "edge";

// TODO: Support alt text once Next has a solution for params
export const alt = "Khao's Blog Post";
export const contentType = "image/png";

export { size };

export default async function Image(
	{ params }: { params: { slug: string } }
) {
	const res = await fetch(
    `https://raw.githubusercontent.com/KhaoDoesDev/portfolio/main/content/${params.slug}.mdx`
  )

  if (!res.ok) {
    return new Response('Not found', { status: 404 })
  }

	const text = await res.text()
	const title = /title: (.*)/.exec(text)?.[1]

	if (!title) {
    return new Response('Missing title', { status: 400 })
  }

  return await GenerateImage({
    title
  });
}