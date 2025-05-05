"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type HeroCardProps = {
	icon: React.ElementType;
	title: string;
	description: string;
	orientation?: "horizontal" | "vertical";
};

export const HeroCard = ({
	icon: Icon,
	title,
	description,
	orientation = "horizontal",
}: HeroCardProps) => {
	return (
		<motion.div
			whileHover={
				orientation === "horizontal"
					? { y: -5, transition: { duration: 0.2 } }
					: {}
			}
			className={cn(
				"bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-3 transition-all flex items-start gap-4 shadow-sm",
				orientation === "horizontal"
					? "flex-row"
					: "flex-col items-center justify-center text-center hover:shadow-md",
			)}
		>
			<div className="min-w-10 min-h-10 w-10 h-10 rounded-lg flex items-center justify-center border border-blue-300 text-blue-800 dark:text-blue-300 dark:border-blue-600 bg-blue-200 dark:bg-blue-600/20">
				<Icon className="w-5" />
			</div>
			<div>
				<h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2">
					{title}
				</h3>
				<p className="text-neutral-600 dark:text-neutral-400 text-sm">
					{description}
				</p>
			</div>
		</motion.div>
	);
};
