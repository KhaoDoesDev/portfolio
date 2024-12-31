'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GithubIcon, Mail, MapPin, Code, Server, Database, Cloud } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FaDiscord } from "react-icons/fa"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-purple-700 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://avatars.githubusercontent.com/u/62739017?v=4"
            alt="Khao's Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="ml-2 font-bold text-white">Khao&apos;s Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white shadow-text">
                  Sawadee Krab! I&apos;m Khao
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl shadow-text">
                  A software engineer based in Thailand. 
                  Building amazing products.
                </p>
              </div>
              <div className="flex items-center justify-center space-x-4 text-white shadow-text">
                <MapPin className="w-5 h-5" />
                <span>Nakhon Pathom, Thailand</span>
              </div>
              <Image
                src="https://avatars.githubusercontent.com/u/62739017?v=4"
                alt="Khao's profile"
                width={200}
                height={200}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-white" id="skills">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#006C67]">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-[#F4DECB]">
                <CardHeader>
                  <Code className="w-8 h-8 mb-2 text-[#006C67]" />
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>React</li>
                    <li>Next.JS</li>
                    <li>TypeScript</li>
                    <li>Shadcn UI</li>
                    <li>Daisy UI</li>
                    <li>Astro</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#F4DECB]">
                <CardHeader>
                  <Server className="w-8 h-8 mb-2 text-[#006C67]" />
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Python</li>
                    <li>Java / Kotlin</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#F4DECB]">
                <CardHeader>
                  <Database className="w-8 h-8 mb-2 text-[#006C67]" />
                  <CardTitle>Databases</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>Redis</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#F4DECB]">
                <CardHeader>
                  <Cloud className="w-8 h-8 mb-2 text-[#006C67]" />
                  <CardTitle>DevOps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Docker</li>
                    <li>GitHub</li>
                    <li>GitLab</li>
                    <li>Git</li>
                    <li>CI/CD</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-[#F4DECB]" id="projects">
          <div className="container flex flex-col items-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#006C67]">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <Image
                  src="/BeaconHosting.png"
                  alt="Beacon Hosting"
                  width={600}
                  height={300}
                  className="object-contain w-full h-48"
                />
                <CardHeader>
                  <CardTitle>Beacon Hosting</CardTitle>
                  <CardDescription>A game hosting company with a custom coded dashboard, landing page and much more.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Built with React, Node.js, Next.js, Prisma ORM, and PostgreSQL. Features user authentication and game server management with a full billing panel to manage your billing cycles.</p>
                  <div className="flex mt-4 space-x-2">
                    <Button variant="outline" size="sm" className="line-through" disabled>
                      <GithubIcon className="mr-2 h-4 w-4" /> View Code
                    </Button>
                    <Button variant="outline" size="sm" className="line-through" disabled>
                      Live Demo
                    </Button>
                  </div>
                  <span className="text-xs text-gray-500">Currently a work in progress and will be released soon.</span>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/Minecraft.png"
                  alt="Minecraft Logo"
                  width={600}
                  height={300}
                  className="object-contain w-full h-48"
                />
                <CardHeader>
                  <CardTitle>AI Minecraft Bot (with RLHF)</CardTitle>
                  <CardDescription>An AI-powered Minecraft Bot that learns to play the game using Reinforcement Learning with Human Feedback (RLHF).</CardDescription>  
                </CardHeader>
                <CardContent>
                  <p>Utilizes machine learning algorithms and real-time data to beat the game. Made with Tensorflow.js, Node.js, Next.js, Mineflayer.js, and PostgreSQL.</p>
                  <div className="flex mt-4 space-x-2">
                    <Button variant="outline" className="line-through" size="sm" disabled>
                      <GithubIcon className="mr-2 h-4 w-4" /> View Code
                    </Button>
                    <Button variant="outline" className="line-through" size="sm" disabled>
                      Live Demo
                    </Button>
                  </div>
                  <span className="text-xs text-gray-500">Currently closed source due to security purposes.</span>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/Minecraft.png"
                  alt="Minecraft Logo"
                  width={600}
                  height={300}
                  className="object-contain w-full h-48"
                />
                <CardHeader>
                  <CardTitle>AI Agentic Minecraft Bot</CardTitle>
                  <CardDescription>An Agentic AI-powered Minecraft Bot that plays the game all by itself.</CardDescription>  
                </CardHeader>
                <CardContent>
                  <p>Utilizes real-time data to beat the game. Made with Vercel&apos;s AI SDK, Node.js, Next.js, Mineflayer.js, and PostgreSQL.</p>
                  <div className="flex mt-4 space-x-2">
                    <Button variant="outline" className="line-through" size="sm" disabled>
                      <GithubIcon className="mr-2 h-4 w-4" /> View Code
                    </Button>
                    <Button variant="outline" className="line-through" size="sm" disabled>
                      Live Demo
                    </Button>
                  </div>
                  <span className="text-xs text-gray-500">Currently a work in progress and will be released soon.</span>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/Minecraft.png"
                  alt="Minecraft Logo"
                  width={600}
                  height={300}
                  className="object-contain w-full h-48"
                />
                <CardHeader>
                  <CardTitle>Mineslayer</CardTitle>
                  <CardDescription>Mineslayer is a Minecraft botting library built in Typescript to make Minecraft bots using Javascript or Typescript.</CardDescription>  
                </CardHeader>
                <CardContent>
                  <p>Built in Typescript with the help from the Fabric community, mcdevs (owners of <a href="https://wiki.vg/">wiki.vg</a>), and the existing project where the inspiration came from: Mineflayer.JS (<a href="https://github.com/PrismarineJS/">PrismarineJS</a> being the owners)</p>
                  <div className="flex mt-4 space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://discord.gg/invite/p69Zu9abtE/">
                        <FaDiscord className="mr-2 h-4 w-4" /> Join the Discord Server
                      </a>
                    </Button>
                    <Button variant="outline" className="line-through" size="sm" disabled>
                      <GithubIcon className="mr-2 h-4 w-4" /> View Code
                    </Button>
                  </div>
                  <span className="text-xs text-gray-500">Currently a work in progress.</span>
                </CardContent>
              </Card>
            </div>
            <Button variant={"secondary"} className="mt-8" size={"lg"} asChild><a href="https://github.com/Khaogamermain01/" className="text-lg font-semibold">View All Projects</a></Button>
          </div>
        </section>
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-[#006C67]" id="contact">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Get in Touch</h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-white text-center max-w-[600px]">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" className="bg-white" asChild>
                  <a href="mailto:khao@khaodoes.dev" className="text-[#006C67]"><Mail className="mr-2 h-4 w-4" /> Email Me</a>
                </Button>
                <Button variant="outline" className="bg-white" asChild>
                  <a href="https://github.com/KhaoDoesDev/" className="text-[#006C67]"><GithubIcon className="mr-2 h-4 w-4" /> GitHub</a>
                </Button>
                <Button variant="outline" className="bg-white" asChild>
                  <a href="https://discord.com/users/624819246177845270" className="text-[#006C67]"><FaDiscord className="mr-2 h-4 w-4" color="#5865F2" /> Discord</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#006C67]">
        <p className="text-xs text-white">© {new Date().getFullYear()} Khao. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-white" href="#skills">
            Skills
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-white" href="#projects">
            Projects
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-white" href="#contact">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
