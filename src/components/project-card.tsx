import Image from "next/image";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from "./ui/card";
import Markdown from "react-markdown";
import { TechTag } from "./tech-tag";
import Link from "next/link";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  start: string;
  end: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: {
    website?: string;
    github?: string;
  };
  footNote?: string;
}

export function ProjectCard({
  title,
  description,
  start,
  end,
  tags,
  image,
  video,
  links,
  footNote,
}: ProjectCardProps) {
  return (
    <Card
      className={
        "flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg"
      }
    >
      <div className="block">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top [aspect-ratio:16/9]"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="pointer-events-none h-40 w-full object-contain"
            unoptimized
          />
        )}
      </div>
      <CardHeader className="px-2 pt-4">
        <div className="flex flex-col gap-1">
          {links?.website ? (
            <Link href={links.website} target="_blank">
              <CardTitle className="font-bold text-blue-400 hover:underline">
                {title}
              </CardTitle>
            </Link>
          ) : (
            <CardTitle className="font-bold">{title}</CardTitle>
          )}
          <time className="text-xs">
            {start} - {end}
          </time>
          <Markdown className="max-w-full text-pretty text-xs text-muted-foreground">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag, _) => (
              <TechTag key={_} tag={tag} />
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="mt-auto flex flex-col items-start gap-1 px-2 pb-2">
        <div className="flex gap-1 items-center w-full *:w-full *:flex *:gap-2">
          <Button
            variant={"secondary"}
            size={"sm"}
            asChild={!!links?.website}
            disabled={!links?.website}
          >
            {links?.website ? (
              <Link href={links.website} target="_blank">
                <Globe className="h-4 w-4" />
                Website
              </Link>
            ) : (
              <>
                <Globe className="h-4 w-4" />
                Website
              </>
            )}
          </Button>

          <Button
            variant={"secondary"}
            size={"sm"}
            asChild={!!links?.github}
            disabled={!links?.github}
          >
            {links?.github ? (
              <Link href={links.github} target="_blank">
                <FaGithub className="h-4 w-4" />
                Source
              </Link>
            ) : (
              <>
                <FaGithub className="h-4 w-4" />
                Source
              </>
            )}
          </Button>
        </div>
        {footNote && <p className="text-xs text-gray-400 text-nowrap truncate w-full">{footNote}</p>}
      </CardFooter>
    </Card>
  );
}
