import { prisma } from "@/services/database/prisma.client";
import bcrypt from "bcryptjs";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const data = await request.json();
	const user = await prisma.user.findUnique({
		where: {
			email: data.email,
		},
	});

	if (!user) {
		return NextResponse.json(
			{
				ok: false,
				message: "Usuário não encontrado.",
			},
			{
				status: 401,
			},
		);
	}

	const isValidEmail = user.email === data.email;
	const isValidPassword = bcrypt.compare(
		data.password as string,
		user.password,
	);

	if (!isValidEmail || !isValidPassword) {
		return NextResponse.json(
			{
				ok: false,
				message: "Email ou senha inválidos.",
			},
			{
				status: 401,
			},
		);
	}

	return NextResponse.json(
		{
			ok: true,
			data,
		},
		{
			status: 200,
		},
	);
}
