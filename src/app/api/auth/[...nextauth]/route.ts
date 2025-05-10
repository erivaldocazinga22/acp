import { env } from "@/lib/env.config";
import { prisma } from "@/services/database/prisma.client";
import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
	debug: true,
	pages: {
		signIn: "/auth/sign-in",
		signOut: "/auth/sign-in",
		error: "/auth/sign-in",
		newUser: "/auth/sign-in",
	},
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials) return null;
				if (!credentials.email || !credentials.password) return null;

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user) return null;

				const isValidEmail = user.email === credentials.email;
				const isValidPassword = await bcrypt.compare(
					credentials.password as string,
					user.password,
				);

				if (!isValidEmail || !isValidPassword) return null;

				return {
					id: user.id,
					email: user.email,
					name: user.name,
					role: user.role,
					image: user.image,
				};
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
