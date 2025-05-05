import { BookCheck } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export const Header = async () => {
	return (
		<header className="sticky top-0 z-50 px-4 md:px-0 w-full border-b border-dashed border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-transparent">
			<div className="container mx-auto h-16 flex items-center justify-between">
				<Link
					href="/"
					className="flex items-center gap-2 text-xl font-bold"
				>
					<BookCheck className="size-6 text-primary" />
					<span className="hidden sm:inline-block">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
							Portal
						</span>{" "}
						Acadêmico
					</span>
				</Link>

				<div className="flex items-center gap-4">
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};
