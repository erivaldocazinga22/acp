import type { Metadata } from "next";
import Link from "next/link";
import { SignInForm } from "../_components/signin-form";

export const metadata: Metadata = {
	title: "Login",
	description: "Login page for the application",
};

export default function SignIn() {
	return (
		<main className="w-full max-w-md mx-auto">
			<h2 className="text-3xl font-bold mb-8 text-center">
				Bem-vindo de volta
			</h2>
			<SignInForm />
			<p className="mt-8 text-center text-sm dark:text-neutral-500">
				Não tem uma conta?{" "}
				<Link
					href="/register"
					className="font-medium text-blue-600 hover:text-blue-500"
				>
					Cadastre-se
				</Link>
			</p>
		</main>
	);
}
