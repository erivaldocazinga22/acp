import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
	title: "Portal Acadêmico",
	description:
		"Acesse materiais de estudo, provas anteriores e recursos essenciais.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt" className="dark" suppressHydrationWarning>
			<body className="relative min-h-dvh bg-background text-foreground antialiased">
				<ThemeProvider attribute="class">{children}</ThemeProvider>
			</body>
		</html>
	);
}
