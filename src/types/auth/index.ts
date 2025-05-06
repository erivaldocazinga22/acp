import { z } from "zod";

export const signInSchema = z.object({
	email: z.string().email({ message: "Insirá um email válido." }),
	password: z
		.string()
		.min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
});

export type SignInSchemaValues = z.infer<typeof signInSchema>;

/*
 * Schema de register
 *
 */

export const accountTypeSchema = z.object({
	accountType: z.enum(["student", "institution"], {
		required_error: "Selecione um tipo de conta",
	}),
});

export const basicInfoSchema = z
	.object({
		name: z
			.string()
			.min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
		email: z.string().email({ message: "Email inválido" }),
		slug: z.string(),
		password: z
			.string()
			.min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
		confirmPassword: z
			.string()
			.min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não coincidem",
		path: ["confirmPassword"],
	});

export const academicInfoSchema = z.object({
	institution: z.string().min(2, { message: "Informe sua instituição" }),
	course: z.string({ required_error: "Selecione um curso" }),
	semester: z.string({ required_error: "Selecione um semestre" }),
});

export type AccountTypeFormValues = z.infer<typeof accountTypeSchema>;
export type BasicInfoFormValues = z.infer<typeof basicInfoSchema>;
export type AcademicInfoFormValues = z.infer<typeof academicInfoSchema>;

export type RegisterRequest = AcademicInfoFormValues &
	BasicInfoFormValues &
	AccountTypeFormValues;
