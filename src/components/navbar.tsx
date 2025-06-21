import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-end gap-6 p-6">
      <Link
        href="/#about"
        className="text-purple-400 transition-colors hover:text-purple-300"
      >
        about
      </Link>
      <Link
        href="/blog"
        className="text-purple-400 transition-colors hover:text-purple-300"
      >
        blog
      </Link>
      <Link
        href="/#projects"
        className="text-purple-400 transition-colors hover:text-purple-300"
      >
        projects
      </Link>
      <Link
        href="/#contact"
        className="text-purple-400 transition-colors hover:text-purple-300"
      >
        contact
      </Link>
    </nav>
  );
}
