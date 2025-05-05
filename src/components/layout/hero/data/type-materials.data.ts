import { BookOpen, FileText, Key, List } from "lucide-react";
import { v4 as uuidV4 } from "uuid";

export const TYPE_MATERIALS = [
	{
		id: uuidV4(),
		icon: FileText,
		label: "Provas Anteriores",
		description: "Enunciados de provas dos anos anteriores",
	},
	{
		id: uuidV4(),
		icon: BookOpen,
		label: "Materiais",
		description: "Materiais dos anos anteriores",
	},
	{
		id: uuidV4(),
		icon: List,
		label: "Exercícios",
		description: "Listas de exercícios para praticar",
	},
	{
		id: uuidV4(),
		icon: Key,
		label: "Resoluções",
		description: "Chaves de provas e resoluções",
	},
];
