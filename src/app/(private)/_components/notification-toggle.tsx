import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Bell } from "lucide-react";

export const NotificationToggle = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="h-9 w-9 relative"
				>
					<Bell className="h-4 w-4" />
					<span className="sr-only">Alternar tema</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent align="end" className="w-fit">
				<div className="flex items-center justify-between gap-10">
					<span>Notificações</span>
					<button type="button" className="underline text-nowrap">
						Mostrar todas como lidas
					</button>
				</div>
				{Array.from({ length: 4 }).map((_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index} className="h-12">
						Notificação {index + 1}
					</div>
				))}
			</PopoverContent>
		</Popover>
	);
};
