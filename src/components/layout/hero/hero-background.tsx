"use client";
import { motion } from "framer-motion";

export const HeroBackground = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			<div className="absolute top-0 left-0 w-full h-full opacity-5">
				<svg
					className="w-full h-full"
					xmlns="http://www.w3.org/2000/svg"
					aria-labelledby="gridPatternTitle"
				>
					<title id="gridPatternTitle">Background Grid Pattern</title>
					<pattern
						id="grid-pattern"
						x="0"
						y="0"
						width="40"
						height="40"
						patternUnits="userSpaceOnUse"
					>
						<rect width="1" height="1" fill="currentColor" />
					</pattern>
					<rect
						width="100%"
						height="100%"
						fill="url(#grid-pattern)"
					/>
				</svg>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.15 }}
				transition={{ duration: 1.5 }}
				className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-blue-600 to-blue-400 blur-[8rem] dark:opacity-20 opacity-10"
			/>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.1 }}
				transition={{ duration: 1.5, delay: 0.3 }}
				className="absolute bottom-[10%] left-[5%] w-[20rem] h-[20rem] rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur-[6rem] dark:opacity-15 opacity-10"
			/>
		</div>
	);
};
