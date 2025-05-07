import { prisma } from "@/services/database/prisma.client";
import { type NextRequest, NextResponse } from "next/server";

export async function GET() {
	const materials = await prisma.material.findMany();

	if (!materials) {
		return NextResponse.json(
			{
				ok: false,
				message: "Falha ao listar os materiais",
			},
			{ status: 200 },
		);
	}

	return NextResponse.json(
		{
			ok: true,
			message: "Listagem bem sucedida",
			data: materials ?? [],
		},
		{ status: 200 },
	);
}

export async function POST(request: NextRequest) {
	const data = await request.json();
	console.log("[CREATE-MATERAILS]", { data });

	return NextResponse.json(
		{
			ok: true,
			message: "Criação bem sucedida",
			data,
		},
		{ status: 201 },
	);
}
