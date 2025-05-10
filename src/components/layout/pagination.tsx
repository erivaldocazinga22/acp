"use client";

import { Button } from "@/components/ui/button";

interface PaginationProps {
	title?: string;
	currentPage: number;
	totalItems: number;
	itemsPerPage: number;
	onPageChange: (page: number) => void;
}

export const Pagination = ({
	title = "itens",
	currentPage,
	totalItems,
	itemsPerPage,
	onPageChange,
}: PaginationProps) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const start = (currentPage - 1) * itemsPerPage + 1;
	const end = Math.min(currentPage * itemsPerPage, totalItems);

	return (
		<div className="flex justify-between items-center mt-6">
			<div className="text-sm text-gray-500 dark:text-neutral-400">
				Mostrando {start} a {end} de {totalItems} {title}
			</div>

			<div className="flex gap-2">
				<Button
					variant="outline"
					size="sm"
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="text-blue-700 border-blue-200 hover:bg-blue-50 disabled:text-neutral-400 dark:text-blue-400 dark:hover:bg-blue-900 dark:disabled:text-neutral-600"
				>
					Anterior
				</Button>

				{Array.from({ length: totalPages }, (_, i) => i + 1).map(
					(page) => (
						<Button
							key={page}
							variant="outline"
							size="sm"
							onClick={() => onPageChange(page)}
							className={
								page === currentPage
									? "bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500 dark:text-white"
									: "text-blue-700 border-blue-200 hover:bg-blue-50 dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-900"
							}
						>
							{page}
						</Button>
					),
				)}

				<Button
					variant="outline"
					size="sm"
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="text-blue-700 border-blue-200 hover:bg-blue-50 disabled:text-neutral-400 dark:text-blue-400 dark:hover:bg-blue-900 dark:disabled:text-neutral-600"
				>
					Próxima
				</Button>
			</div>
		</div>
	);
};
