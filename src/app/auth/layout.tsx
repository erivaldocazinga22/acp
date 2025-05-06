import { BookCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { InfoCard } from "./_components/info-card";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen overflow-hidden">
			<div className="flex min-h-screen">
				<div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
					<div className="mx-auto w-full max-w-sm lg:w-96">
						<div className="flex justify-center">
							<Link
								href="/"
								className="flex items-center gap-2 text-xl font-bold"
							>
								<BookCheck className="size-6 text-blue-600" />
								<span className="hidden sm:inline-block">
									<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
										Portal
									</span>{" "}
									Acadêmico
								</span>
							</Link>
						</div>

						<div className="mt-10 overflow-y-auto">{children}</div>
					</div>
				</div>

				<div className="hidden lg:block relative w-0 flex-1">
					<Image
						className="absolute inset-0 h-full w-full object-cover"
						src="/placeholder.svg"
						alt="Portal Acadêmico"
						width={1920}
						height={1080}
						priority
					/>
					<div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-20" />
					<div className="absolute inset-0 flex flex-col justify-end p-12">
						<InfoCard />
					</div>
				</div>
			</div>
		</div>
	);
}
