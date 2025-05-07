import { prisma } from "@/services/database/prisma.client";
import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
	pages: {
		signIn: "/auth/login",
		signOut: "/auth/login",
	},
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const user = await prisma.user.findUnique({
					where: {
						email: credentials?.email as string,
					},
				});

				if (!user) {
					throw new Error("Email ou senha incorretos");
				}

				const isValidEmail = user.email === credentials?.email;
				const isValidPassword = bcrypt.compare(
					credentials?.password as string,
					user.password,
				);

				if (!isValidEmail || !isValidPassword) return null;

				return user;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			const customerUser = user as User;
			if (user) {
				return {
					...token,
					role: customerUser.role,
					picture: customerUser.image,
				};
			}
			return token;
		},
		async session({ session, token }) {
			return {
				...session,
				user: {
					email: token.email,
					name: token.name,
					role: token.role,
					picture: token.picture,
				},
			};
		},
	},
};

const handlers = NextAuth(authOptions);

export { handlers as GET, handlers as POST };
