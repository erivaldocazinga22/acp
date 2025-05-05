import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/layout/hero";

export default function Home() {
	return (
		<main className="font-default">
			<Header />
			<HeroSection />
			<Footer />
		</main>
	);
}
