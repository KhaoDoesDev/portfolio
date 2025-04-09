import { Mail } from "lucide-react";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";
import React from "react";

export const siteURL = "https://www.khaodoes.dev";
export const avatarURL = "https://avatars.githubusercontent.com/u/62739017?v=4";
export const timezone = "Asia/Bangkok";
export const name = "Khao";

interface Experience {
  title: string;
	link?: string;
	discontinued?: boolean;
	discontinued_reason?: string;
  position: string;
  start: string;
  end: string;
  logo: string;
}

export const experience: Experience[] = [
  {
    title: "FireMM",
		link: "https://youtube.com/firemm",
    position: "Software Developer",
    start: "December 2021",
    end: "March 2024",
    logo: "/logos/firemm.png",
  },
  {
    title: "FireMM SMP",
		discontinued: true,
    position: "Minecraft Server Manager",
    start: "April 2022",
    end: "March 2024",
    logo: "/logos/firemm.png",
  },
  {
    title: "Drift Hosting",
		discontinued: true,
    position: "COO",
    start: "September 2023",
    end: "January 2024",
    logo: "/logos/drift-hosting.png",
  },
  {
    title: "Galaxy Nexus (formerly, Skyline Hosting)",
		link: "https://galaxynex.us",
    position: "Software Developer",
    start: "December 2023",
    end: "April 2024",
    logo: "/logos/galaxy-nexus.png",
  },
  {
    title: "Beacon Hosting",
		link: "https://beaconhosting.org",
    position: "COO",
    start: "January 2024",
    end: "February 2025",
    logo: "/logos/beacon-hosting.png",
  },
];

interface Education {
  title: string;
  logo: string;
	link?: string;
	diploma?: string;
  start: string;
  end: string;
}

export const education: Education[] = [
  {
    title: "Sarasas Witaed Nakhon Pathom School",
    logo: "/logos/swnkpt.png",
		link: "https://swnkpt.ac.th",
    start: "2014",
    end: "2015",
  },
  {
    title: "Anuban Nakhon Pathom School",
    logo: "/logos/anubannkp.png",
		link: "https://anubannkp.ac.th",
    start: "2016",
    end: "2023",
  },
  {
    title: "Kanjanaphisek Wittayalai Nakhon Pathom (Pratamnak Suankularb Mathayom) School",
    logo: "/logos/kjn.png",
		link: "https://kjn.ac.th",
    start: "2024",
    end: "Present",
  },
];

interface Skill {
  title: string;
  logo: string;
  logo_rounding?: "rounded-full" | "rounded-lg";
  logo_background?: string;
}

export const skills: Skill[] = [
	{
		title: "JavaScript",
		logo: "/logos/javascript.svg",
	},
	{
		title: "TypeScript",
		logo: "/logos/typescript.svg",
	},
  {
		title: "Java",
		logo: "/logos/java.svg",
	},
  {
		title: "Kotlin",
		logo: "/logos/kotlin.svg",
	},
  {
		title: "Python",
		logo: "/logos/python.svg",
	},
  {
    title: "React",
    logo: "/logos/react.svg",
  },
  {
    title: "Next.js",
    logo: "/logos/nextjs.svg",
  },
  {
    title: "Node.js",
    logo: "/logos/nodejs.svg",
  },
  {
    title: "MongoDB",
    logo: "/logos/mongodb.svg",
  },
  {
    title: "PostgreSQL",
    logo: "/logos/postgresql.svg",
  },
  {
    title: "MySQL",
    logo: "/logos/mysql.svg",
    logo_background: "bg-white"
  },
  {
    title: "Redis",
    logo: "/logos/redis-white.svg",
		logo_background: "bg-[#FF4438]"
  },
  {
    title: "Docker",
    logo: "/logos/docker.svg",
  },
];

interface Project {
  title: string;
  description: string;
  start: string;
  end: string;
  tags: string[];
  image?: string;
  video?: string;
  links?: {
    website?: string;
		github?: string;
  };
  footNote?: string;
}


export const projects: Project[] = [
  {
    title: "PanPan",
    description: "An airplane preview website which tracks airplanes and predicts the exact position in the sky of the airplane using a camera and machine learning models.",
    start: "December 2024",
		end: "Present",
    image: "https://placehold.co/800x400?text=PanPan&font=roboto",
    tags: ["typescript", "nextjs", "tailwindcss", "drizzle", "postgresql", "docker", "redis", "lucide", "trpc", "reactquery", "shadcnui", "radixui"],
    footNote: "Currently a work-in-progress.",
  },
  {
    title: "Agentic AI controlled Minecraft Bot",
    description: "A Minecraft bot that can play Minecraft with the power of LLMs (i.e. GPT-4o, OpenAI o1, Deepseek R1, Llama 3, and etc.) and can be completely autonomous.",
    start: "January 2024",
		end: "Present",
    image: "/logos/minecraft.png",
    tags: ["typescript", "vercel", "redis"],
    footNote: "Currently not yet ready for public use due to safety.",
  },
  {
    title: "AI Minecraft Bot (with RLHF)",
    description: "An AI-powered Minecraft Bot that learns to play the game using Reinforcement Learning with Human Feedback (RLHF).",
    start: "March 2024",
		end: "Present",
    image: "/logos/minecraft.png",
    tags: ["typescript", "nodejs", "tensorflow"],
    footNote: "Currently a work-in-progress.",
  },
  {
    title: "Mineslayer",
    description: "A Minecraft botting library built in Typescript to make Minecraft bots using high-level Javascript (with support for Typescript).",
    start: "October 2024",
		end: "Present",
    image: "/logos/minecraft.png",
    tags: ["typescript", "javascript", "nodejs"],
    footNote: "Currently a work-in-progress.",
  },
];

export const contactLinks = [
  {
		link: "mailto:khao@khaodoes.dev",
		icon: <Mail className="h-4 w-4" />,
		text: "Email",
	},
	{
		link: "https://github.com/KhaoDoesDev",
		icon: <FaGithub className="h-4 w-4" />,
		text: "GitHub",
	},
	{
		link: "https://discord.com/users/624819246177845270",
		icon: <FaDiscord color="#5865F2" className="h-4 w-4" />,
		text: "Discord",
	},
	{
		link: "https://www.instagram.com/khaoisthebest",
		icon: <FaInstagram className="h-4 w-4" />,
		text: "Instagram",
	}
];