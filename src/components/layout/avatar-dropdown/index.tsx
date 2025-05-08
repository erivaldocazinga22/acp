"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AvatarTrigger } from "./avatar-trigger";
interface AvatarDropdownProps {
	items: {
		id: string;
		label: string;
		icon?: React.ElementType;
		url: string;
	}[];
}
export const AvatarDropdown = ({ items }: AvatarDropdownProps) => {
	const { data: session } = useSession();

	const handleSignOut = async () => await signOut();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="w-fit h-fit p-0 font-normal rounded-full bg-transparent"
					aria-label="User menu"
				>
					<AvatarTrigger />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 mt-2" align="end" forceMount>
				<DropdownMenuLabel className="font-normal mb-2">
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">
							{session?.user?.name}
						</p>
						<p className="text-xs leading-none text-muted-foreground">
							{session?.user?.email}
						</p>
					</div>
				</DropdownMenuLabel>
				{items && <DropdownMenuSeparator />}
				<DropdownMenuGroup>
					{items.map((item) => (
						<DropdownMenuItem key={item.id} className="p-0">
							<Link
								href={item.url}
								className="w-full py-2 px-2.5"
							>
								{item.icon && <item.icon className="w-5 h-5" />}
								{item.label}
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleSignOut}>
					Terminar Sessão
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
