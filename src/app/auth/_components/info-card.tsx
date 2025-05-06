"use client";

import { usePathname } from "next/navigation";

export const InfoCard = () => {
	const pathname = usePathname();
	const isSignIn = pathname === "/sign-in";

	const title = isSignIn
		? "Portal Acadêmico"
		: "Junte-se ao Portal Acadêmico";

	const description = isSignIn
		? "Acesse materiais de estudo, provas anteriores e recursos essenciais. Organize o seu percurso académico e conecte-se com a comunidade universitária."
		: "Acesse materiais de estudo organizados por ano letivo, curso, semestre e disciplina. Provas anteriores, materiais, listas de exercícios e resoluções disponíveis para si.";

	return (
		<div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg max-w-lg">
			<h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
			<p className="text-white/90">{description}</p>
		</div>
	);
};
