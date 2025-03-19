import * as DATA from "@/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Navbar() {
  return (
    <header
      className="fixed mx-auto top-0 z-50 flex h-fit w-full inset-x-0 items-center justify-center p-2 sm:p-6"
      suppressHydrationWarning
    >
      <div className="backdrop-blur-xs flex w-fit items-center rounded-full border border-gray-400 bg-black/75 p-0.5 sm:!p-1 px-6 sm:!px-8">
        <Link href={"/"} className="mr-8 sm:flex items-center gap-2 hidden" prefetch>
          <Avatar className="size-6">
            <AvatarImage alt={DATA.name} src={"/api/avatar.webp"} />
            <AvatarFallback />
          </Avatar>
          <span>Khao&apos;s Portfolio</span>
        </Link>
        <div className="flex gap-2">
          <Button variant="ghost" size={"sm"} asChild>
            <Link href={"/"} className="flex gap-2 text-lg font-semibold" prefetch>
              Home
            </Link>
          </Button>
          <Button variant="ghost" size={"sm"} asChild>
            <Link href={"/#about"} className="flex gap-2 text-lg font-semibold">
              About
            </Link>
          </Button>
          <Button variant="ghost" size={"sm"} asChild>
            <Link href={"/blog"} className="flex gap-2 text-lg font-semibold" prefetch>
              Blog
            </Link>
          </Button>
          <Button variant="ghost" size={"sm"} asChild>
            <Link
              href={"/#contact"}
              className="flex gap-2 text-lg font-semibold"
            >
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
