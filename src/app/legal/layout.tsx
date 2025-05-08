import { Footer } from "@/components/layout/footer";

export default function LayoutLegal({
	children,
}: { children: React.ReactNode }) {
	return (
		<div>
			{children}
			<Footer />
		</div>
	);
}
