import * as DATA from "@/data";
import Link from "next/link";

export function Footer({ isHome }: { isHome?: boolean }) {
  return (
    <footer className="mt-16 flex flex-col text-center text-sm text-gray-500">
      {!isHome && <Link href="/" className="transition-colors hover:text-gray-400 mb-4">
        ← back to home
      </Link>}
      <p className="mb-6">© {new Date(Date.now()).getFullYear()} Khao</p>
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.values(DATA.links).map(({ url, icon }, _) => (  
          <Link key={_} href={url} className="flex gap-2">
            {icon}
          </Link>
        ))}
      </div>
    </footer>
  );
}
