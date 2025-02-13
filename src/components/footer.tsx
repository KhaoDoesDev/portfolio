import * as DATA from "@/data";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="flex p-6 w-full justify-between text-xs">
			<span>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</span>

			<div className="flex flex-wrap gap-4">
				{DATA.contactLinks.map(({ link, icon }, _) => (
					<Link key={_} href={link} className="flex gap-2">
						{icon}
					</Link>
				))}
			</div>
		</footer>
	);
}