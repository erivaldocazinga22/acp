import { RegisterForm } from "../_components/register-form";

export default function Register() {
	return (
		<main className="w-full max-w-md mx-auto">
			<h2 className="text-3xl font-bold mb-2 text-center">
				Criar nova conta
			</h2>
			<RegisterForm />
		</main>
	);
}
