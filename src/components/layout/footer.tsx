import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const Footer = async () => {
	return (
		<footer className="h-16 border-t border-dashed flex items-center">
			<div className="container mx-auto flex flex-col items-center justify-between  gap-2 md:gap-4 md:flex-row">
				<p className="text-sm text-muted-foreground">
					&copy; {new Date().getFullYear()} 💙
					<Link
						href="https://github.com/erivaldocazinga22"
						className="font-semibold dark:text-blue-200 hover:text-blue-600"
					>
						Erivaldo Caginga
					</Link>
					. All rights reserved.
				</p>
				<nav className="flex gap-4 items-center sm:gap-6">
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Termos
					</Link>
					<Separator orientation="vertical" className="min-h-4" />
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Politicas
					</Link>
					<Separator orientation="vertical" className="min-h-4" />
					<Link
						href="/help"
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Ajudas
					</Link>
				</nav>
			</div>
		</footer>
	);
};