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
import { type BasicInfoFormValues, basicInfoSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	ArrowLeft,
	ArrowRight,
	Lock,
	Mail,
	Signature,
	User,
} from "lucide-react";
import { useForm } from "react-hook-form";

type RegisterStepTwoProps = {
	isAccountType: "student" | "institution" | "";
	onSubmit: (data: BasicInfoFormValues) => void;
	onGoBack: () => void;
};

export const RegisterStepTwo = ({
	isAccountType,
	onSubmit,
	onGoBack,
}: RegisterStepTwoProps) => {
	const form = useForm<BasicInfoFormValues>({
		resolver: zodResolver(basicInfoSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			slug: "",
		},
	});
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<h3 className="text-xl font-semibold mb-8 text-center">
					Informações básicas
				</h3>

				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-sm font-medium text-neutral-700">
								Nome{" "}
								{isAccountType === "institution"
									? "da Instituição"
									: "Completo"}
							</FormLabel>
							<FormControl>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<User className="h-5 w-5 text-neutral-400" />
									</div>
									<Input
										{...field}
										placeholder={
											isAccountType === "institution"
												? "Nome da Instituição"
												: "Nome Completo"
										}
										className="pl-10 border-neutral-300 focus:ring-blue-500 focus:border-blue-500"
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{isAccountType === "institution" && (
					<FormField
						control={form.control}
						name="slug"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm font-medium text-neutral-700">
									Sigla da Instituição
								</FormLabel>
								<FormControl>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
											<Signature className="h-5 w-5 text-neutral-400" />
										</div>
										<Input
											{...field}
											placeholder="Sigla da Instituição"
											className="pl-10 border-neutral-300 focus:ring-blue-500 focus:border-blue-500"
										/>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-sm font-medium text-neutral-700">
								Email
							</FormLabel>
							<FormControl>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Mail className="h-5 w-5 text-neutral-400" />
									</div>
									<Input
										{...field}
										type="email"
										placeholder="seu@email.com"
										className="pl-10 border-neutral-300 focus:ring-blue-500 focus:border-blue-500"
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
							<FormLabel className="text-sm font-medium text-neutral-700">
								Senha
							</FormLabel>
							<FormControl>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Lock className="h-5 w-5 text-neutral-400" />
									</div>
									<Input
										{...field}
										type="password"
										placeholder="••••••••"
										className="pl-10 border-neutral-300 focus:ring-blue-500 focus:border-blue-500"
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-sm font-medium text-neutral-700">
								Confirmar Senha
							</FormLabel>
							<FormControl>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Lock className="h-5 w-5 text-neutral-400" />
									</div>
									<Input
										{...field}
										type="password"
										placeholder="••••••••"
										className="pl-10 border-neutral-300 focus:ring-blue-500 focus:border-blue-500"
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex gap-3">
					<Button
						type="button"
						variant="outline"
						onClick={onGoBack}
						className="flex-1 border-neutral-300 text-neutral-700 hover:bg-neutral-50"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Voltar
					</Button>
					<Button
						type="submit"
						className="flex-1 flex justify-center items-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					>
						{isAccountType === "student" ? (
							<>
								Próximo
								<ArrowRight className="ml-2 h-4 w-4" />
							</>
						) : (
							"Criar conta"
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
};
