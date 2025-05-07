import { getServerSession } from "next-auth";

export default async function DashboardPage() {
	const session = await getServerSession();
	return (
		<div>
			<h1 className="text-3xl font-bold underline">Dashboard</h1>
			<p>Essa é a página do dashboard.</p>

			{session ? (
				<pre>{JSON.stringify(session, null, 2)}</pre>
			) : (
				<p>Você não está logado.</p>
			)}
		</div>
	);
}
