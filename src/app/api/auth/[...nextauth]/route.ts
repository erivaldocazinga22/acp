import { env } from "@/lib/env.config";
import type { User } from "@prisma/client";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
	pages: {
		signIn: "/auth/sign-in",
		signOut: "/auth/sign-in",
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

				const response = await fetch(
					`${env.NEXTAUTH_URL}/api/auth/sign-in`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: credentials?.email,
							password: credentials?.password,
						}),
					},
				);

				const res = await response.json();
				if (!response.ok) return null;

				return res.data;
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
