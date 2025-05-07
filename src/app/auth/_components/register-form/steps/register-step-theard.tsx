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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { type AcademicInfoFormValues, academicInfoSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, School } from "lucide-react";
import { useForm } from "react-hook-form";

type RegisterStepTheardProps = {
	onSubmit: (data: AcademicInfoFormValues) => void;
	onGoBack?: () => void;
};

export const RegisterStepTheard = ({
	onSubmit,
	onGoBack,
}: RegisterStepTheardProps) => {
	const form = useForm<AcademicInfoFormValues>({
		resolver: zodResolver(academicInfoSchema),
		defaultValues: {
			course: "",
			institution: "",
			semester: "",
		},
	});

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<h3 className="text-xl font-semibold text-neutral-900 mb-8 text-center">
					Informações Acadêmicas
				</h3>
				<FormField
					control={form.control}
					name="institution"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-sm font-medium text-neutral-700">
								Instituição
							</FormLabel>
							<FormControl>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<School className="h-5 w-5 text-neutral-400" />
									</div>
									<Input
										{...field}
										placeholder="Nome da sua instituição"
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
					name="course"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-sm font-medium text-neutral-700">
								Curso
							</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger className="w-full border-neutral-300 focus:ring-blue-500 focus:border-blue-500">
										<SelectValue placeholder="Selecione um curso" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="ENG/INFOR">
										01. Engenharia Informática
									</SelectItem>
									<SelectItem value="ENG/QUI">
										02. Engenharia Química
									</SelectItem>
									<SelectItem value="ENG/CIVIL">
										03. Engenharia Civil
									</SelectItem>
									<SelectItem value="ENG/PROD-INDUST">
										04. Engenharia de Produção Industrial
									</SelectItem>
									<SelectItem value="ENG/MEC">
										05. Engenharia Mecânica
									</SelectItem>
									<SelectItem value="ENG/ELEC">
										06. Engenharia Eletrotécnica
									</SelectItem>
									<SelectItem value="ENG/PETROLEOS">
										07. Engenharia de Petróleos
									</SelectItem>
									<SelectItem value="SOCIAIS/ECON">
										08. Economia
									</SelectItem>
									<SelectItem value="SOCIAIS/CONT">
										09. Contabilidade
									</SelectItem>
									<SelectItem value="SOCIAIS/GEST-EMPRES">
										10. Gestão Empresarial
									</SelectItem>
									<SelectItem value="SOCIAIS/GEOFISICA">
										11. Geofísica
									</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="semester"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-sm font-medium text-neutral-700">
								Semestre
							</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger className="w-full border-neutral-300 focus:ring-blue-500 focus:border-blue-500">
										<SelectValue placeholder="Selecione o semestre" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="1">
										1º Semestre
									</SelectItem>
									<SelectItem value="2">
										2º Semestre
									</SelectItem>
									<SelectItem value="3">
										3º Semestre
									</SelectItem>
									<SelectItem value="4">
										4º Semestre
									</SelectItem>
									<SelectItem value="5">
										5º Semestre
									</SelectItem>
								</SelectContent>
							</Select>
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
						className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					>
						Criar conta
					</Button>
				</div>
			</form>
		</Form>
	);
};
