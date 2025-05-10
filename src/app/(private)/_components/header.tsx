"use client";
import { AvatarDropdown } from "@/components/layout/avatar-dropdown";
import { LogoApp } from "@/components/layout/logo-app";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { usePathname } from "next/navigation";
import { v4 as uuidV4 } from "uuid";
import { NotificationToggle } from "./notification-toggle";

const NAV_USER = [
	{
		id: uuidV4(),
		label: "Perfil",
		url: "/account/profile",
	},
	{
		id: uuidV4(),
		label: "Definições",
		url: "/account/settings",
	},
];

export function Header() {
	const pathname = usePathname();
	const isDashboard = pathname === "/dashboard";
	return (
		<header className="border-b border-dashed">
			<div className="container mx-auto h-16 flex items-center justify-between">
				{isDashboard ? (
					<LogoApp href="/dashboard" />
				) : (
					<LogoApp href="/painel" />
				)}
				<div className="flex items-center gap-4 ml-auto">
					{!isDashboard && <NotificationToggle />}
					<ThemeToggle />
					<AvatarDropdown items={NAV_USER} />
				</div>
			</div>
		</header>
	);
}
