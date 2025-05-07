import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

type RegisterStepButtonsProps = {
	currentStep: number;
	currentAccountType: "student" | "institution" | "";
	onGoBack: () => void;
};
export const RegisterStepButtons = ({
	currentStep,
	currentAccountType,
	onGoBack,
}: RegisterStepButtonsProps) => {
	return (
		<div className="flex gap-3">
			{currentStep > 1 && (
				<Button
					type="button"
					variant="outline"
					onClick={onGoBack}
					className="flex-1 border-neutral-300 text-neutral-700 hover:bg-neutral-50"
				>
					<ArrowLeft className="mr-2 h-4 w-4" />
					Voltar
				</Button>
			)}
			<Button
				type="submit"
				className="flex-1 flex justify-center items-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>
				{currentStep === 1 ||
				(currentStep === 2 && currentAccountType === "student") ? (
					<>
						Próximo
						<ArrowRight className="ml-2 h-4 w-4" />
					</>
				) : (
					"Criar conta"
				)}
			</Button>
		</div>
	);
};
