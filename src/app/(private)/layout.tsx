import { ScrollArea } from "@/components/ui/scroll-area";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Header } from "./_components/header";

export default function PrivateLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<NuqsAdapter>
			<div className="flex max-h-screen min-h-svh overflow-hidden">
				<main className="w-full flex flex-col">
					<Header />
					<ScrollArea className="p-4 flex-1 h-[calc(100vh-80px)]">
						{children}
					</ScrollArea>
				</main>
			</div>
		</NuqsAdapter>
	);
}
