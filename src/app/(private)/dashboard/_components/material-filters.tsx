"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const MaterialFilters = () => {
	const [tipoAberto, setTipoAberto] = useState(true);
	const [disciplinaAberto, setDisciplinaAberto] = useState(true);
	const [anoAberto, setAnoAberto] = useState(true);

	return (
		<div className="p-4 rounded-lg border">
			<h3 className="font-semibold text-lg mb-4">Filtros</h3>

			<Collapsible
				open={tipoAberto}
				onOpenChange={setTipoAberto}
				className="mb-4"
			>
				<CollapsibleTrigger asChild>
					<Button
						variant="ghost"
						className="flex w-full justify-between p-0 font-medium"
					>
						Tipo de Material
						<ChevronDown
							className={`h-4 w-4 transition-transform ${tipoAberto ? "rotate-180" : ""}`}
						/>
					</Button>
				</CollapsibleTrigger>
				<CollapsibleContent className="mt-2 space-y-2">
					<div className="flex items-center space-x-2">
						<Checkbox id="tipo-prova" />
						<Label htmlFor="tipo-prova">Enunciados de Provas</Label>
					</div>
					<div className="flex items-center space-x-2">
						<Checkbox id="tipo-recurso" />
						<Label htmlFor="tipo-recurso">
							Enunciados de Recurso
						</Label>
					</div>
					<div className="flex items-center space-x-2">
						<Checkbox id="tipo-resolucao" />
						<Label htmlFor="tipo-resolucao">Resoluções</Label>
					</div>
				</CollapsibleContent>
			</Collapsible>

			<Separator className="my-4" />

			<Collapsible
				open={disciplinaAberto}
				onOpenChange={setDisciplinaAberto}
				className="mb-4"
			>
				<CollapsibleTrigger asChild>
					<Button
						variant="ghost"
						className="flex w-full justify-between p-0 font-medium"
					>
						Disciplina
						<ChevronDown
							className={`h-4 w-4 transition-transform ${disciplinaAberto ? "rotate-180" : ""}`}
						/>
					</Button>
				</CollapsibleTrigger>
				<CollapsibleContent className="mt-2 space-y-2">
					<div className="flex items-center space-x-2">
						<Checkbox id="disciplina-cdi" />
						<Label htmlFor="disciplina-cdi">
							calculo diferencial e integral
						</Label>
					</div>
					<div className="flex items-center space-x-2">
						<Checkbox id="disciplina-algebra-linear" />
						<Label htmlFor="disciplina-algebra-linear">
							Algbra Linear e Geometria Analitica
						</Label>
					</div>
					<div className="flex items-center space-x-2">
						<Checkbox id="disciplina-fisica" />
						<Label htmlFor="disciplina-fisica">Física</Label>
					</div>
					<div className="flex items-center space-x-2">
						<Checkbox id="disciplina-quimica" />
						<Label htmlFor="disciplina-quimica">Química</Label>
					</div>
					<div className="flex items-center space-x-2">
						<Checkbox id="disciplina-ingles" />
						<Label htmlFor="disciplina-ingles">Inglês</Label>
					</div>
					<div className="flex items-center space-x-2">
						<Checkbox id="disciplina-Programação" />
						<Label htmlFor="disciplina-Programação">
							Programação I
						</Label>
					</div>
					<div className="flex items-center space-x-2">
						<Checkbox id="disciplina-alp" />
						<Label htmlFor="disciplina-alp">
							Algoritmo e Logica de Programção
						</Label>
					</div>
				</CollapsibleContent>
			</Collapsible>

			<Separator className="my-4" />

			<Collapsible open={anoAberto} onOpenChange={setAnoAberto}>
				<CollapsibleTrigger asChild>
					<Button
						variant="ghost"
						className="flex w-full justify-between p-0 font-medium"
					>
						Ano
						<ChevronDown
							className={`h-4 w-4 transition-transform ${anoAberto ? "rotate-180" : ""}`}
						/>
					</Button>
				</CollapsibleTrigger>
				<CollapsibleContent className="mt-2">
					<RadioGroup defaultValue="todos">
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="todos"
								id="ano-todos"
								className="text-blue-600 border-blue-400 data-[state=checked]:bg-blue-600"
							/>
							<Label htmlFor="ano-todos">Todos</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="2024"
								id="ano-2024"
								className="text-blue-600 border-blue-400 data-[state=checked]:bg-blue-600"
							/>
							<Label htmlFor="ano-2024">2024</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="2023"
								id="ano-2023"
								className="text-blue-600 border-blue-400 data-[state=checked]:bg-blue-600"
							/>
							<Label htmlFor="ano-2023">2023</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="2022"
								id="ano-2022"
								className="text-blue-600 border-blue-400 data-[state=checked]:bg-blue-600"
							/>
							<Label htmlFor="ano-2022">2022</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="2021"
								id="ano-2021"
								className="text-blue-600 border-blue-400 data-[state=checked]:bg-blue-600"
							/>
							<Label htmlFor="ano-2021">2021</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="2020"
								id="ano-2020"
								className="text-blue-600 border-blue-400 data-[state=checked]:bg-blue-600"
							/>
							<Label htmlFor="ano-2020">2020</Label>
						</div>
					</RadioGroup>
				</CollapsibleContent>
			</Collapsible>

			<Separator className="my-4" />

			<Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white">
				Aplicar Filtros
			</Button>
		</div>
	);
};
