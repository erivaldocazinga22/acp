import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { prisma } from "../prisma.client";

async function seedDatabase() {
	console.log("🌱 Iniciando seed do banco de dados...");
	const usersExists = await prisma.user.findMany();
	if (usersExists.length > 0) {
		console.log(
			"❌ Usuários já existem no banco de dados. Abortando seed.",
		);
		return;
	}

	await prisma.user.deleteMany();
	await prisma.account.deleteMany();
	await prisma.material.deleteMany();
	await prisma.authenticator.deleteMany();
	await prisma.session.deleteMany();
	await prisma.verificationToken.deleteMany();

	console.log("✅ Banco de dados resetado!");

	console.log("📌 Criando usuários...");
	const PasswordService = async (senha: string) => {
		return await bcrypt.hash(senha, 10);
	};
	const users: Omit<
		User,
		"avatar_url" | "createdAt" | "status" | "updatedAt" | "id"
	>[] = [
		{
			name: "Portal Academico",
			email: "info@academicportal.co.ao",
			password: await PasswordService("#1q2w3e4r5t**"),
			emailVerified: null,
			image: null,
			course: null,
			academic_year: null,
			semester: null,
			institution: null,
			slug: null,
			role: "ADMIN",
			isActive: true,
		},
		{
			name: "Erivaldo Malebo Caginga",
			email: "erivaldomalebo2206@gmail.com",
			password: await PasswordService("password"),
			emailVerified: null,
			image: "https://github.com/erivaldocazinga22.png",
			course: "ENG/INFOR",
			academic_year: null,
			semester: "2",
			institution:
				"Instituto Superior Politecnico de Tecnologia e Ciências",
			slug: "ISPTEC",
			role: "ADMIN",
			isActive: true,
		},
	];

	for (const data of users) {
		const createdUser = await prisma.user.create({ data });
		console.log(`✅ Usuário criado: ${createdUser.email}`);
	}
	console.log("✅ Usuários criados!");
	console.log("🎉 Seed concluído com sucesso!");
}

seedDatabase()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (error) => {
		console.error("❌ Erro durante o seed:", error);
		await prisma.$disconnect();
	});
