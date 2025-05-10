import type { Metadata } from "next";
import { MaterialFilters } from "./_components/material-filters";
import { MaterialResults } from "./_components/material-results";
import { MaterialSearch } from "./_components/material-search";

export const metadata: Metadata = {
	title: "Dashboard - Portal Academico",
	description: "Encontre materiais escolares",
};

export default async function DashboardPage() {
	return (
		<main className="container mx-auto px-4 py-8">
			<div className="max-w-3xl mx-auto mb-8 text-center">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
					Encontre materiais escolares
				</h2>
				<p className="mt-4 text-lg text-neutral-600">
					Pesquise enunciados de provas, enunciados de recurso e
					resoluções para seus estudos
				</p>
			</div>
			<MaterialSearch />
			<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
				<div className="md:col-span-1">
					<MaterialFilters />
				</div>
				<div className="md:col-span-3">
					<MaterialResults />
				</div>
			</div>
		</main>
	);
}
