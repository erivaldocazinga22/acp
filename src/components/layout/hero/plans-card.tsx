import { cn } from "@/lib/utils";
import { CheckSquare } from "lucide-react";
import Link from "next/link";

type PlansCardProps = {
	title: string;
	items: {
		id: string;
		label: string;
		active: boolean;
	}[];
	recommended: boolean;
};
export const PlansCard = ({ title, items, recommended }: PlansCardProps) => {
	return (
		<div
			className={cn(
				"flex flex-col bg-white dark:bg-neutral-900 border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow relative",
				recommended && "border-blue-300 dark:border-blue-900",
			)}
		>
			{recommended && (
				<div className="absolute -top-3 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
					Recomendado
				</div>
			)}
			<h4 className="text-xl font-bold mb-4 text-blue-600">{title}</h4>
			<ul className="space-y-3 flex-1">
				{items.map((item) => (
					<li key={item.id} className="flex items-start gap-2">
						<CheckSquare
							className={cn(
								"h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5",
								item.active && "text-blue-600",
							)}
						/>
						<span>{item.label}</span>
					</li>
				))}
			</ul>
			<Link href="/register" className="block mt-6">
				<button
					type="button"
					className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium shadow-sm"
				>
					Escolher {title.toLowerCase()}
				</button>
			</Link>
		</div>
	);
};
