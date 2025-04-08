import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as DATA from "@/data";
import { cn } from "@/lib/utils";
import { Mail, TriangleAlert } from "lucide-react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { ProjectCard } from "@/components/project-card";
import { WavingText } from "@/components/waving-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Markdown from "react-markdown";

export default function Portfolio() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section
        id="hero"
        className="flex w-full items-start justify-between gap-2 mb-16"
      >
        <div>
          <h1 className="text-3xl sm:text-5xl xl:text-6xl/none font-bold tracking-tighter">
            Hi, I&apos;m {DATA.name} <WavingText text="👋" />
          </h1>
          <p className="max-w-[600px] md:text-xl mt-2">
            I am a software engineer. I love building random new things and
            messing with AI and ML.
          </p>
        </div>

				<Avatar className="size-28 border">
					<AvatarImage alt={DATA.name} src={"/api/avatar.webp"} />
					<AvatarFallback />
				</Avatar>
      </section>

      <section id="about" className="mb-16">
        <h2 className="text-xl font-bold">About Me</h2>
        <Markdown className="prose dark:prose-invert text-pretty  prose-a:text-blue-400 prose-a:hover:underline prose-a:font-mono text-gray-400 mt-2 prose-p:leading-[1.5]">
          At the age of 7, I apparently decided to start coding. My first
          projects were simple, random websites and controllers for my old TV.
          In the past, I started working on Minecraft bots with [mineflayer](https://github.com/PrismarineJS/mineflayer)
          which lets you code Minecraft bots with high-level JavaScript. Around
          this time, I also started working on Next.js websites and started
          learning how LLMs work and how to integrate them into applications.
        </Markdown>
      </section>

      <section id="experience" className="mb-16">
        <h2 className="text-xl font-bold mb-2">Experience</h2>
        <TooltipProvider>
          <div className="space-y-2">
            {DATA.experience.map((experience, _) => (
              <div key={_} className="flex w-full items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={experience.logo}
                    alt={experience.title}
                    width={48}
                    height={48}
                    className={cn(
                      "h-[48px] w-[48px] rounded-full bg-white",
                      experience.discontinued && "opacity-50",
                    )}
                    unoptimized
                  />
                  <div className="flex flex-col">
                    <h3 className="flex items-center gap-2 text-sm sm:text-lg font-bold">
                      {experience.link ? (
                        <Link
                          href={experience.link}
                          target="_blank"
                          className="text-blue-400 hover:underline"
                        >
                          {experience.title}
                        </Link>
                      ) : (
                        experience.title
                      )}
                      {experience.discontinued && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <TriangleAlert className="h-4 w-4 text-yellow-500" />
                          </TooltipTrigger>
                          <TooltipContent className="[&>a]:text-blue-400 hover:[&>a]:underline">
                            <p>
                              {experience.discontinued_reason ?? "Discontinued"}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">{experience.position}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm sm:text-base">
                  {experience.start} - {experience.end}
                </span>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </section>

      <section id="education" className="mb-16">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <div className="space-y-2">
          {DATA.education.map((education, _) => (
            <div key={_} className="flex w-full items-center justify-between">
              <div className="flex w-2/3 items-center gap-4">
                <Image
                  src={education.logo}
                  alt={education.title}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full bg-white"
                  unoptimized
                />
                <div className="flex flex-col">
                  <h3 className="flex items-center gap-2 text-sm sm:text-lg font-bold">
                    {education.link ? (
                      <Link
                        href={education.link}
                        target="_blank"
                        className="text-blue-400 hover:underline"
                      >
                        {education.title}
                      </Link>
                    ) : (
                      education.title
                    )}
                  </h3>
                  {education.diploma && (
                    <p className="text-gray-400">{education.diploma}</p>
                  )}
                </div>
              </div>
              <span className="text-gray-400 text-sm sm:text-base">
                {education.start} - {education.end}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mb-16">
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {DATA.skills.map((skill, _) => (
            <div
              key={_}
              className="flex items-center rounded-lg bg-gray-700 p-1"
            >
              <h3 className="flex w-full items-center gap-2 text-sm font-bold">
                <div className="flex h-6 w-6 items-center justify-center">
                  <Image
                    src={skill.logo}
                    alt={skill.title}
                    width={24}
                    height={24}
                    className={cn(
                      "h-fit w-fit",
                      skill.logo_rounding ?? "rounded",
                      skill.logo_background ?? "bg-transparent",
                    )}
                    unoptimized
                  />
                </div>
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mb-16">
        <h2 className="text-xl font-bold mb-2">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
          {DATA.projects.map((project, _) => (
            <ProjectCard
              key={_}
              title={project.title}
              description={project.description}
              start={project.start}
              end={project.end}
              tags={project.tags}
              image={project.image}
              video={project.video}
              links={project.links}
              footNote={project.footNote}
            />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <Button variant={"secondary"} className="mt-4" size={"lg"} asChild>
            <Link
              href="https://github.com/KhaoDoesDev/"
              className="flex gap-2 text-lg font-semibold"
              target="_blank"
            >
              <FaGithub className="h-4 w-4" />
              Check out my other projects!
            </Link>
          </Button>
        </div>
      </section>

      <section id="contact" className="mb-16">
        <h2 className="font-sans text-5xl font-bold mx-auto w-fit mb-2">Get in touch</h2>
        <p className="text-center text-xl text-gray-400 mx-auto mb-4">
          I&apos;m always open to new opportunities and collaborations.
          <br />
          Feel free to reach out!
        </p>
        <div className="flex flex-wrap space-x-2 w-fit mx-auto">
          {[
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
          ].map((contact, _) => (
            <Button key={_} variant={"secondary"} asChild>
              <Link
                href={contact.link}
                className="space-x-2 text-lg font-semibold"
                target="_blank"
              >
                {contact.icon}
                {contact.text}
              </Link>
            </Button>
          ))}
        </div>
      </section>
    </main>
  );
}
