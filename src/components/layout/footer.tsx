import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const Footer = async () => {
	return (
		<footer className="h-16 border-t border-dashed flex items-center">
			<div className="container mx-auto flex flex-col items-center justify-between  gap-2 md:gap-4 md:flex-row">
				<p className="text-sm text-muted-foreground">
					&copy; {new Date().getFullYear()} 💙
					<Link
						href="https://eclipse-solutions.vercel.app/"
						className="font-semibold dark:text-blue-200 hover:text-blue-600"
					>
						Eclipse Solutions
					</Link>
					. Todos os direitos reservados.
				</p>
				<nav className="flex gap-4 items-center sm:gap-6">
					<Link
						href="/legal/terms"
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Termos
					</Link>
					<Separator orientation="vertical" className="min-h-4" />
					<Link
						href="/legal/privacy"
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Politicas
					</Link>
					<Separator orientation="vertical" className="min-h-4" />
					<Link
						href="/legal/help"
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Ajudas
					</Link>
				</nav>
			</div>
		</footer>
	);
};
