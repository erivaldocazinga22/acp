"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Layers, Sparkles, Users2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { AVAILABLE_PLANS } from "./data/available-plans";
import { TYPE_MATERIALS } from "./data/type-materials.data";
import { HeroBackground } from "./hero-background";
import { HeroCard } from "./hero-card";
import { PlansCard } from "./plans-card";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.3 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const shimmerVariants = {
	hidden: { opacity: 0, x: -100 },
	visible: {
		opacity: [0, 1, 0],
		x: [100, 300, 500],
		transition: {
			repeat: Number.POSITIVE_INFINITY,
			duration: 3,
			ease: "linear",
		},
	},
};

export const HeroSection = () => {
	const router = useRouter();

	const navigateToGetStarted = useCallback(
		() => router.push("/register"),
		[router],
	);
	const navigateToSignIn = useCallback(
		() => router.push("/sign-in"),
		[router],
	);

	return (
		<section className="relative bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 overflow-hidden transition-colors duration-300">
			<HeroBackground />
			<div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="max-w-5xl mx-auto"
				>
					<motion.div
						variants={itemVariants}
						className="flex justify-center mb-8"
					>
						<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-blue-600 dark:text-blue-400 text-sm shadow-sm">
							<Sparkles className="h-4 w-4" />
							<span>Plataforma Educacional</span>
						</div>
					</motion.div>
					<motion.div
						variants={itemVariants}
						className="text-center mb-6"
					>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
							Todos os{" "}
							<span className="relative inline-block">
								<span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
									materiais
								</span>
								<motion.span
									variants={shimmerVariants}
									className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/20 to-transparent -z-10 blur-sm"
								/>
							</span>
						</h1>
					</motion.div>
					<motion.p
						variants={itemVariants}
						className="text-center text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10"
					>
						Acesse materiais de estudo, provas anteriores e recursos
						essenciais. Organize seu percurso acadêmico e conecte-se
						com a comunidade universitária.
					</motion.p>
					<motion.div
						variants={itemVariants}
						className="relative max-w-2xl mx-auto mb-10"
					>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-full blur-md -z-10" />
					</motion.div>
					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
					>
						<Button
							type="button"
							size="lg"
							className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white h-12 px-8 shadow-lg shadow-blue-900/10"
							onClick={navigateToGetStarted}
						>
							Vamos começar
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
						<Button
							type="button"
							variant="outline"
							size="lg"
							className="rounded-full border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 h-12 px-8 shadow-sm"
							onClick={navigateToSignIn}
						>
							Já tenho uma conta
						</Button>
					</motion.div>
					<motion.div
						variants={itemVariants}
						className="max-w-4xl mx-auto mb-16"
					>
						<h3 className="text-2xl font-bold mb-6 text-center">
							Tipos de materiais disponíveis
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
							{TYPE_MATERIALS.map((material) => (
								<HeroCard
									key={material.id}
									icon={material.icon}
									title={material.label}
									description={material.description}
									orientation="vertical"
								/>
							))}
						</div>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="max-w-4xl mx-auto mb-16"
					>
						<h3 className="text-2xl font-bold mb-6 text-center">
							Planos disponíveis
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{AVAILABLE_PLANS.map((plan) => (
								<PlansCard
									key={plan.id}
									title={plan.title}
									items={plan.items}
									recommended={plan.recommended}
								/>
							))}
						</div>
					</motion.div>
					<motion.div
						variants={itemVariants}
						className="grid grid-cols-1 md:grid-cols-3 gap-6"
					>
						<HeroCard
							title="5000+ recursos"
							description="Acesse milhares de materiais educativos de alta qualidade"
							icon={BookOpen}
						/>
						<HeroCard
							title="Todas disciplinas"
							description="Conteúdo organizado para todas as áreas de conhecimento"
							icon={Layers}
						/>
						<HeroCard
							title="Comunidade ativa"
							description="Conecte-se com outros estudantes e professores"
							icon={Users2}
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};
