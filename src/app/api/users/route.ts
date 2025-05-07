import { prisma } from "@/services/database/prisma.client";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const res = await request.json();

	if (!res.id) {
		return NextResponse.json(
			{
				ok: false,
				message: "Todos os campos são obrigatórios",
			},
			{
				status: 400,
			},
		);
	}

	const user = await prisma.user.update({
		where: { id: res.id },
		data: {
			isActive: !res.isActive,
		},
	});
	const text = res.isActive ? "desativação" : "activação";

	if (!user) {
		return NextResponse.json(
			{
				ok: false,
				message: `Falha na ${text} o user`,
			},
			{ status: 500 },
		);
	}
	return NextResponse.json(
		{
			ok: true,
			message: `${text[0].toUpperCase() + text.substring(1)} bem sucedida`,
		},
		{ status: 200 },
	);
}
