import { getServerSession } from "next-auth";

export default async function ProfilePage() {
	const session = await getServerSession();
	return (
		<main className="flex flex-col items-center justify-center w-full h-screen">
			<h1>Perfil</h1>

			<pre>{JSON.stringify(session, null, 2)}</pre>
		</main>
	);
}
