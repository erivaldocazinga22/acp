import { cn } from "@/lib/utils";
import { BookCheck } from "lucide-react";
import Link from "next/link";

interface LogoAppProps {
	href?: string;
	className?: React.HTMLAttributes<HTMLAnchorElement>["className"];
}

export const LogoApp = ({ href = "/", className }: LogoAppProps) => {
	return (
		<Link
			href={href}
			className={cn(
				"flex items-center gap-2 text-xl font-bold",
				className,
			)}
		>
			<BookCheck className="size-6 text-primary" />
			<span className="hidden md:inline-block transition">
				<span className="bg-clip-text text-sm md:text-lg text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
					Portal
				</span>{" "}
				Acadêmico
			</span>
		</Link>
	);
};
