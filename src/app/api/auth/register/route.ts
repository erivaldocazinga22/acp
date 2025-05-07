import { prisma } from "@/services/database/prisma.client";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const body = await request.json();
	if (body.accountType === "institution") {
	}

	if (!body.email || !body.password) {
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

	const user = await prisma.user.create({
		data: {
			email: body.email,
			name: body.name,
			role: body.accountType === "institution" ? "ENTERPRISE" : "STUDENT",
			password: body.password,
			institution: body.institution,
			slug: (body.institution as string)
				.split(" ")
				.join("")
				.toUpperCase(),
			course: body.course,
			semester: body.semester,
			academic_year: body.academic_year,
		},
	});

	if (!user) {
		return NextResponse.json(
			{
				ok: false,
				message: "Falha ao criar o user",
			},
			{ status: 500 },
		);
	}

	return NextResponse.json(
		{
			ok: true,
			message: "Hello from the register route!",
			data: body,
		},
		{ status: 201 },
	);
}
