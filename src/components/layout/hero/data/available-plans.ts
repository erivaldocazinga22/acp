import { v4 as uuidV4 } from "uuid";

export const AVAILABLE_PLANS = [
	{
		id: uuidV4(),
		title: "GRÁTIS",
		items: [
			{
				id: uuidV4(),
				label: "Materiais da sua universidade",
				active: true,
			},
			{
				id: uuidV4(),
				label: "Resoluções de provas",
				active: false,
			},
			{
				id: uuidV4(),
				label: "Materiais de outras universidades",
				active: false,
			},
		],
		recommended: false,
	},
	{
		id: uuidV4(),
		title: "BASIC",
		items: [
			{
				id: uuidV4(),
				label: "Materiais da sua universidade",
				active: true,
			},
			{
				id: uuidV4(),
				label: "Resoluções de provas",
				active: true,
			},
			{
				id: uuidV4(),
				label: "Materiais de outras universidades",
				active: false,
			},
		],
		recommended: false,
	},
	{
		id: uuidV4(),
		title: "PREMIUM",
		items: [
			{
				id: uuidV4(),
				label: "Materiais da sua universidade",
				active: true,
			},
			{
				id: uuidV4(),
				label: "Resoluções de todas as provas",
				active: true,
			},
			{
				id: uuidV4(),
				label: "Materiais de outras universidades",
				active: true,
			},
		],
		recommended: true,
	},
];
