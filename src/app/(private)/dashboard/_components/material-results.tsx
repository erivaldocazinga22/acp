"use client";
import { LoaderSpinner } from "@/components/layout/loader-spenner";
import { Pagination } from "@/components/layout/pagination";
import type { Material } from "@/types/material";
import { parseAsInteger, useQueryState } from "nuqs";
import useSWR from "swr";
import { MaterialCard } from "./material-card";

const fetcher = async (url: string) => {
	const res = await fetch(url);
	if (!res.ok) throw new Error("Erro ao buscar os materiais.");
	const data = await res.json();
	return data.data as Material[];
};
export const MaterialResults = () => {
	const [searchQuery] = useQueryState("search", {
		defaultValue: "",
	});
	const [currentPage, setCurrentPage] = useQueryState(
		"page",
		parseAsInteger.withDefault(1),
	);
	const { data, error, isLoading } = useSWR("/api/materials", fetcher);
	const ITEMS_PER_PAGE = 8;
	const start = (currentPage - 1) * ITEMS_PER_PAGE;
	const end = currentPage * ITEMS_PER_PAGE;

	const normalize = (str: string) =>
		str
			.normalize("NFD")
			// biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/\s+/g, "")
			.toLowerCase();

	const searchWords = normalize(searchQuery).split(" ").filter(Boolean);

	const materials = data
		?.filter((material) => {
			const title = normalize(material.title);
			return searchWords.every((word) => title.includes(word));
		})
		.slice(start, end);

	return (
		<div>
			<div>
				{isLoading ? (
					<p className="flex items-center gap-2">
						<LoaderSpinner />
						<span>A carregar materiais...</span>
					</p>
				) : error ? (
					<p>Falha ao listar os materiais</p>
				) : materials && materials.length > 0 ? (
					<>
						<div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
							{materials.map((material) => (
								<MaterialCard
									key={material.id}
									data={material}
								/>
							))}
						</div>
						<Pagination
							title="materiais"
							currentPage={currentPage}
							itemsPerPage={ITEMS_PER_PAGE}
							totalItems={data?.length || 0}
							onPageChange={(e) => setCurrentPage(e)}
						/>
					</>
				) : (
					<p>Nenhum material encontrado</p>
				)}
			</div>
		</div>
	);
};
