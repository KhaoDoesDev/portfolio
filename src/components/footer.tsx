"use client";
import * as DATA from "@/data";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Footer({ isHome }: { isHome?: boolean }) {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    const storedYear = localStorage.getItem("copyright");
    if (storedYear) {
      setYear(parseInt(storedYear, 10) || new Date().getFullYear());
    }
  }, []);

  const handleYearClick = () => {
    const newYear = year + 1;
    setYear(newYear);
    localStorage.setItem("copyright", newYear.toString());
  };

  return (
    <footer className="mt-16 flex flex-col justify-center text-center items-center text-sm text-gray-500">
      {!isHome && (
        <Link
          href="/"
          className="transition-colors hover:text-gray-400 mb-4"
        >
          ← back to home
        </Link>
      )}
      <p
        className="mb-2 font-mono cursor-pointer select-none"
        onClick={handleYearClick}
      >
        © {year} Khao
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.values(DATA.links).map(({ url, icon }, idx) => (
          <Link key={idx} href={url} className="flex gap-2">
            {icon}
          </Link>
        ))}
      </div>
    </footer>
  );
}
