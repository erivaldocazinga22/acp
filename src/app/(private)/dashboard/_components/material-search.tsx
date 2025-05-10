"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useQueryState } from "nuqs";

export const MaterialSearch = () => {
	const [searchQuery, setSearchQuery] = useQueryState("search", {
		defaultValue: "",
	});

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		setSearchQuery((prev) => prev.toLowerCase());
	};

	return (
		<form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
			<div className="relative">
				<Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
				<Input
					type="search"
					placeholder="Pesquisar por enunciados, disciplinas, temas..."
					className="pl-10 py-6 text-base"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>
			<Button
				type="submit"
				className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white"
			>
				Pesquisar
			</Button>
		</form>
	);
};
