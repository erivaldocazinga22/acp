import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { prisma } from "../prisma.client";

async function createMaterials() {
	const materials = Array.from({ length: 10 }).map((_, i) => ({
		title: `Material ${i + 1}`,
		image: "placeholder.svg",
		url: "https://files.edgestore.dev/4vyujwn66zqbugzu/publicFiles/_public/post/73863200-b1a2-4e37-b3cc-76cc648eaad9.pdf",
		type: "PDF",
		discipline: `Disciplina ${(i % 5) + 1}`,
		academic_year: `20${22 + (i % 3)}/20${23 + (i % 3)}`,
		semester: `${(i % 2) + 1}`,
		institution: `Instituição ${(i % 3) + 1}`,
		fileType: "application/pdf",
		fileSize: 1024 * (i + 1), // em KB
	}));

	try {
		const createdMaterials = await prisma.material.createMany({
			data: materials,
		});
		console.log(`${createdMaterials.count} materiais criados com sucesso.`);
	} catch (error) {
		console.error("Erro ao criar materiais:", error);
	} finally {
		await prisma.$disconnect();
	}
}

async function seedDatabase() {
	console.log("🌱 Iniciando seed do banco de dados...");
	const usersExists = await prisma.user.findMany();
	if (!(usersExists.length > 0)) {
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
	}

	console.log("📌 Criando mariais...");
	await createMaterials();
	console.log("✅ Materias criados!");
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
