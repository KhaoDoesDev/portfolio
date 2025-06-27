import { Navbar } from "@/components/navbar"
import * as DATA from "@/data"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-12">
        {/* Hero Section */}
        <section id="about" className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">hello, i&apos;m {DATA.name.toLowerCase()}</h1>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>i&apos;m a software engineer with a passion for building random things that i need in my daily life or i was just bored and wanted to make something.</p>
            <p>
              i work mainly with javascript, typescript, react, next.js, and node.js, but i enjoy exploring new technologies
              and solving interesting problems. i&apos;m getting in the fabricmc modding world with making random clients/mods for fun.
            </p>
            <p>
              when i&apos;m not coding, you can find me reading random papers, watching random youtube videos, or
              playing on a random minecraft server.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">projects</h2>

          <p className="mb-6 text-gray-300">
            most of my work is on{" "}
            <Link href={DATA.githubURL} className="text-purple-400 hover:text-purple-300 underline">
              github
            </Link>
            . i&apos;ll try to update this list when i make a random cool and interesting project but for now, most of them are private.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">get in touch</h2>

          <div className="space-y-4 text-lg">
            <p className="text-gray-300">wanna say hello?</p>

            <div className="space-y-2">
              <p>
                email:{" "}
                <Link href={`mailto:` + DATA.email} className="text-purple-400 hover:text-purple-300 underline">
                  {DATA.email}
                </Link>
              </p>
              <p>
                github:{" "}
                <Link href={DATA.githubURL} className="text-purple-400 hover:text-purple-300 underline">
                  @KhaoDoesDev
                </Link>
              </p>
              <p>
                discord:{" "}
                <Link href="https://discord.com/users/624819246177845270" className="text-purple-400 hover:text-purple-300 underline">
                  @khaoisthebest
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm">
          <p>© {new Date(Date.now()).getFullYear()} Khao</p>
        </footer>
      </main>
    </div>
  )
}
