"use client";

import type {
	AcademicInfoFormValues,
	AccountTypeFormValues,
	BasicInfoFormValues,
} from "@/types/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { RegisterFormStep } from "./steps";

export const RegisterForm = () => {
	const router = useRouter();
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		accountType: "" as "student" | "institution",
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		institution: "",
		course: "",
		semester: "",
		slug: "",
	});

	function onSubmitStep1(data: AccountTypeFormValues) {
		setFormData({ ...formData, ...data });
		setStep(2);
	}

	function onSubmitStep2(data: BasicInfoFormValues) {
		setFormData({ ...formData, ...data });
		if (formData.accountType === "student") {
			setStep(3);
		} else {
			toast.success("Verifique a sua conta no seu email.");
			router.push("/auth/sign-in");
		}
	}
	async function onSubmitStep3(data: AcademicInfoFormValues) {
		const finalData = { ...formData, ...data };
		const response = await fetch("/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(finalData),
		});

		const res = await response.json();
		if (!response.ok) {
			toast.error(res.message || "Erro ao criar a conta.");
			return;
		}

		toast.success("Verifique a sua conta no seu email.");
		router.push("/auth/sign-in");
	}

	const goBack = () => {
		if (step > 1) setStep(step - 1);
	};

	return (
		<div className="w-full max-w-md mx-auto">
			{step === 1 && (
				<RegisterFormStep.FirstStep onSubmit={onSubmitStep1} />
			)}
			{step === 2 && (
				<RegisterFormStep.SecondStep
					isAccountType={formData.accountType}
					onSubmit={onSubmitStep2}
					onGoBack={goBack}
				/>
			)}
			{step === 3 && formData.accountType === "student" && (
				<RegisterFormStep.TheardStep onSubmit={onSubmitStep3} />
			)}
			{/* <RegisterFormStep.Buttons
				currentStep={step}
				currentAccountType={formData.accountType}
				onGoBack={goBack}
			/> */}
			<p className="mt-8 text-center text-sm text-neutral-600">
				Já tem uma conta?{" "}
				<Link
					href="/auth/sign-in"
					className="font-medium text-blue-600 hover:text-blue-500"
				>
					Entrar
				</Link>
			</p>
		</div>
	);
};
