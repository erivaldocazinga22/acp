import { signInSchema } from "@/types/auth";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: "/auth/sign-in",
		signOut: "/auth/sign-in",
		verifyRequest: "/auth/sign-in",
		newUser: "/auth/sign-in",
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const { success, data: requestBody } =
					signInSchema.safeParse(credentials);

				if (!success) return null;

				const response = await fetch(
					`${process.env.NEXTAUTH_URL}/api/auth/sign-in`,
					{
						method: "POST",
						body: JSON.stringify({
							email: requestBody.email,
							password: requestBody.password,
						}),
						headers: {
							"Content-Type": "application/json",
						},
					},
				);
				if (!response.ok) return null;

				const data = await response.json();
				return data.data;
			},
		}),
	],
	callbacks: {},
};

const handlers = NextAuth(authOptions);

export { handlers as GET, handlers as POST };
