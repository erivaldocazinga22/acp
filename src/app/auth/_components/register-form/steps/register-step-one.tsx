"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { type AccountTypeFormValues, accountTypeSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { Building2, GraduationCap } from "lucide-react";
import { useForm } from "react-hook-form";

type RegisterStepOneItemProps = {
	label: string;
	description: string;
	icon: React.ElementType;
};

const RegisterStepOneItem = ({
	label,
	description,
	icon: Icon,
}: RegisterStepOneItemProps) => (
	<>
		<Icon className="h-8 w-8 text-blue-600" />
		<div className="text-left">
			<h4 className="text-lg font-medium">{label}</h4>
			<p className="text-sm text-neutral-500">{description}</p>
		</div>
	</>
);

const REGISTER_STEP_ONE_GROUP_ITEMS = [
	{
		value: "student",
		label: "Aluno",
		icon: GraduationCap,
		description: "Acesse materiais e recursos académicos",
	},
	{
		value: "institution",
		label: "Instituição",
		icon: Building2,
		description: "Disponibilize materiais para os seus alunos",
	},
];

type RegisterStepOneProps = {
	onSubmit: (data: AccountTypeFormValues) => void;
};

export const RegisterStepOne = ({ onSubmit }: RegisterStepOneProps) => {
	const form = useForm<AccountTypeFormValues>({
		resolver: zodResolver(accountTypeSchema),
		defaultValues: {
			accountType: "student",
		},
	});

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<h3 className="text-xl font-semibold mb-8 text-center">
					Escolha o tipo de conta
				</h3>

				<FormField
					control={form.control}
					name="accountType"
					render={({ field }) => (
						<FormItem className="space-y-4">
							<FormControl>
								<RadioGroup
									onValueChange={field.onChange}
									defaultValue={field.value}
									className="grid grid-cols-1 gap-4"
								>
									{REGISTER_STEP_ONE_GROUP_ITEMS.map(
										(item) => {
											const selected =
												field.value === item.value;
											return (
												<div
													key={item.value}
													className={cn(
														"p-6 border rounded-lg flex items-center space-x-4 transition-colors cursor-pointer",
														selected
															? "border-blue-500 bg-blue-50 dark:bg-neutral-900/60"
															: "hover:border-neutral-700 hover:bg-blue-50 dark:hover:bg-neutral-900",
													)}
													onClick={() =>
														field.onChange(
															item.value,
														)
													}
													onKeyDown={(e) => {
														if (
															e.key === "Enter" ||
															e.key === " "
														) {
															e.preventDefault();
															field.onChange(
																item.value,
															);
														}
													}}
												>
													<FormControl>
														<RadioGroupItem
															value={item.value}
															className="sr-only"
														/>
													</FormControl>
													<RegisterStepOneItem
														icon={item.icon}
														label={item.label}
														description={
															item.description
														}
													/>
												</div>
											);
										},
									)}
								</RadioGroup>
							</FormControl>
							<FormMessage className="text-center" />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className="w-full flex justify-center items-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					Próximo
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</form>
		</Form>
	);
};
