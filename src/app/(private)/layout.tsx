import { ScrollArea } from "@/components/ui/scroll-area";
import { Header } from "./_components/header";

export default function PrivateLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="flex max-h-screen min-h-svh overflow-hidden">
			<main className="w-full flex flex-col">
				<Header />
				<ScrollArea className="p-4 flex-1 h-[calc(100vh-80px)]">
					{children}
				</ScrollArea>
			</main>
		</div>
	);
}
