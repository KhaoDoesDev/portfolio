import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import * as DATA from "@/data"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pb-12">
        <section id="about" className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold my-16">👋 hello, i&apos;m {DATA.name.toLowerCase()}</h1>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>i&apos;m a software engineer with a passion for building random things that i need in my daily life or i was just bored and wanted to make something.</p>
            <p>
              i work mainly with javascript, typescript, react, next.js, and node.js, but i enjoy exploring new technologies
              and solving interesting problems. i&apos;m getting in the fabricmc modding world with making random clients/mods for fun.
            </p>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">projects</h2>

          <p className="mb-6 text-gray-300">
            most of my work is on{" "}
            <Link href={DATA.githubURL} className="text-purple-400 hover:text-purple-300 hover:underline">
              github
            </Link>
            . i&apos;ll try to update this list when i make a random cool and interesting project when i can but for now, you can go check out my <Link href="/blog" className="text-purple-400 hover:text-purple-300 hover:underline">blog</Link>!
          </p>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">get in touch</h2>

          <div className="space-y-4 text-lg">
            <p className="text-gray-300">wanna say hello?</p>

            <div className="space-y-2">
              <p>
                email:{" "}
                <Link href={DATA.links.email.url} className="text-purple-400 hover:text-purple-300 hover:underline">
                  {DATA.email}
                </Link>
              </p>
              <p>
                discord:{" "}
                <Link href={DATA.links.discord.url} className="text-purple-400 hover:text-purple-300 hover:underline">
                  @khaoisthebest
                </Link>
              </p>
              <p>
                instagram:{" "}
                <Link href={DATA.links.instagram.url} className="text-purple-400 hover:text-purple-300 hover:underline">
                  @khaoisthebest
                </Link>
              </p>
            </div>
          </div>
        </section>

        <Footer isHome />
      </main>
    </div>
  )
}
