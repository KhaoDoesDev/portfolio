import { cn } from "@/lib/utils";
import Image from "next/image";

const techTags: Record<
  string,
  {
    name: string;
    logo: string;
    logo_rounding?: "rounded-full" | "rounded-lg";
    logo_background?: string;
  }
> = {
  nextjs: {
    name: "Next.js",
    logo: "/logos/nextjs.svg",
    logo_rounding: "rounded-full",
    logo_background: "bg-white",
  },
  react: {
    name: "React",
    logo: "/logos/react.svg",
  },
	javascript: {
		name: "JavaScript",
		logo: "/logos/javascript.svg",
	},
	nodejs: {
		name: "Node.js",
		logo: "/logos/nodejs.svg",
	},
	bun: {
		name: "Bun",
		logo: "/logos/bun.svg",
	},
  typescript: {
    name: "TypeScript",
    logo: "/logos/typescript.svg",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    logo: "/logos/tailwindcss.svg",
  },
  prisma: {
    name: "Prisma",
    logo: "/logos/prisma.svg",
  },
  drizzle: {
    name: "Drizzle",
    logo: "/logos/drizzle.svg",
    logo_background: "bg-white",
  },
  vercel: {
    name: "Vercel",
    logo: "/logos/vercel.svg",
  },
  mongodb: {
    name: "MongoDB",
    logo: "/logos/mongodb.svg",
  },
  postgresql: {
    name: "PostgreSQL",
    logo: "/logos/postgresql.svg",
  },
  mysql: {
    name: "MySQL",
    logo: "/logos/mysql.svg",
    logo_background: "bg-white",
  },
  redis: {
    name: "Redis",
    logo: "/logos/redis-white.svg",
		logo_background: "bg-[#FF4438]"
  },
  docker: {
    name: "Docker",
    logo: "/logos/docker.svg",
  },
  trpc: {
    name: "tRPC",
    logo: "/logos/trpc.svg",
  },
  lucide: {
    name: "Lucide",
    logo: "/logos/lucide.svg",
    logo_background: "bg-white",
  },
  reactquery: {
    name: "React Query",
    logo: "/logos/react-query.svg",
  },
  reacticons: {
    name: "React Icons",
    logo: "/logos/react-icons.svg",
    logo_background: "bg-white",
  },
	tensorflow: {
		name: "Tensorflow.js",
		logo: "/logos/tensorflow.svg",
	},
	shadcnui: {
		name: "shadcn/ui",
		logo: "/logos/shadcn-ui.svg",
	},
	radixui: {
		name: "Radix UI",
		logo: "/logos/radix-ui-black.svg",
	},
};

export function TechTag({ tag }: { tag: TechTagType; }) {
  const tech = techTags[tag];
  if (!tech) return null;
  return (
    <div className="flex items-center text-xs gap-1 w-fit bg-white text-black p-0.5 px-1 rounded">
      <Image
        src={tech.logo}
        alt={tech.name}
        width={24}
        height={24}
        className={cn("h-4 w-4", tech.logo_rounding ?? "rounded", tech.logo_background ?? "bg-transparent")}
        unoptimized
      />
      {tech.name}
    </div>
  );
}
export type TechTagType = keyof typeof techTags;