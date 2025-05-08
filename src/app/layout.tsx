import type { Metadata } from "next";
import "./globals.css";
import { NextAuthWapper } from "@/providers/next-auth-wapper";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

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
				<NextAuthWapper>
					<ThemeProvider attribute="class">
						{children}
						<Toaster />
					</ThemeProvider>
				</NextAuthWapper>
				<Analytics />
			</body>
		</html>
	);
}
