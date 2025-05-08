import { LogoApp } from "./logo-app";
import { ThemeToggle } from "./theme-toggle";

export const Header = async () => {
	return (
		<header className="sticky top-0 z-50 px-4 md:px-0 w-full border-b border-dashed border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-transparent">
			<div className="container mx-auto h-16 flex items-center justify-between">
				<LogoApp />

				<div className="flex items-center gap-4">
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};
