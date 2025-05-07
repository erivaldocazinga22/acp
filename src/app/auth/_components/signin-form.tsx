"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type SignInSchemaValues, signInSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const SignInForm = () => {
	const router = useRouter();
	const form = useForm<SignInSchemaValues>({
		mode: "all",
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(data: SignInSchemaValues) {
		try {
			const result = await signIn("credentials", {
				email: data.email,
				password: data.password,
				redirect: false,
			});

			if (result?.ok) {
				toast.success("Login bem-sucedido.");
				router.push("/dashboard");
			} else {
				toast.error("Email ou senha inválidos.");
			}
		} catch (error) {
			toast.error("Erro interno de autenticação.");
			throw new Error((error as Error).message);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-sm font-medium">
								Email
							</FormLabel>
							<FormControl>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Mail className="h-5 w-5 text-neutral-500" />
									</div>
									<Input
										{...field}
										type="email"
										placeholder="seu@email.com"
										className="pl-10 border-neutral-300 focus:ring-blue-600 focus:border-blue-600"
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<div className="flex items-center justify-between">
								<FormLabel className="text-sm font-medium">
									Senha
								</FormLabel>
								<Link
									href="/auth/forgot-password"
									className="text-sm font-medium text-blue-600 hover:text-blue-600"
								>
									Esqueceu a senha?
								</Link>
							</div>
							<FormControl>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Lock className="h-5 w-5 text-neutral-500" />
									</div>
									<Input
										{...field}
										type="password"
										placeholder="••••••••"
										className="pl-10 border-neutral-300 focus:ring-blue-600 focus:border-blue-600"
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
				>
					Entrar
				</Button>
			</form>
		</Form>
	);
};
