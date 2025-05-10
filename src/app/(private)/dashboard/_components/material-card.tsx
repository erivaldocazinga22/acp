import {
	Download,
	Eye,
	FileSpreadsheet,
	FileText,
	FileIcon as FileWord,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Material } from "@/types/material";

interface MaterialCardProps {
	data: Material;
	className?: string;
}

export function MaterialCard({ data: material, className }: MaterialCardProps) {
	const formatFileSize = (bytes: number) => {
		if (bytes < 1024) return `${bytes} B`;
		if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
		if (bytes < 1024 * 1024 * 1024)
			return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
		return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
	};

	const getFileIcon = () => {
		switch (material.fileType.toLowerCase()) {
			case "pdf":
				return <FileText className="h-4 w-4" />;
			case "doc":
			case "docx":
				return <FileWord className="h-4 w-4" />;
			case "xls":
			case "xlsx":
			case "csv":
				return <FileSpreadsheet className="h-4 w-4" />;
			default:
				return <FileText className="h-4 w-4" />;
		}
	};

	function removeExtensionFromLink(url: string): string {
		const lastDotIndex = url.lastIndexOf(".");
		if (lastDotIndex === -1) return url;
		return url.slice(0, lastDotIndex);
	}

	return (
		<Card
			className={cn(
				"overflow-hidden transition-all hover:shadow-md p-0",
				className,
			)}
		>
			<CardHeader className="p-0">
				<div className="relative h-48 w-full overflow-hidden bg-muted">
					{material.image ? (
						<Image
							src={material.image || "/placeholder.svg"}
							alt={material.title}
							fill
							className="min-w-full object-cover"
						/>
					) : (
						<div className="flex h-full w-full items-center justify-center bg-muted">
							{getFileIcon()}
							<div className="ml-2 text-lg font-medium text-muted-foreground/70 uppercase">
								{material.fileType}
							</div>
						</div>
					)}
					<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
						<Badge className="mb-2">{material.type}</Badge>
						<h3 className="line-clamp-2 text-lg font-bold text-white">
							{material.title}
						</h3>
					</div>
				</div>
			</CardHeader>
			<CardContent className="grid gap-2 py-2 px-4">
				<div className="flex flex-wrap gap-2">
					<Badge variant="outline" className="text-xs">
						{material.discipline}
					</Badge>
					<Badge variant="outline" className="text-xs">
						{material.academic_year}
					</Badge>
					<Badge variant="outline" className="text-xs">
						{material.semester}
					</Badge>
				</div>
				<p className="text-sm text-muted-foreground">
					{material.institution}
				</p>
				<div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
					{getFileIcon()}
					<span className="uppercase">{material.fileType}</span>
					<span>•</span>
					<span>{formatFileSize(material.fileSize)}</span>
				</div>
			</CardContent>
			<CardFooter className="flex items-center justify-between border-t p-4">
				<div className="flex items-center gap-4 text-sm text-muted-foreground">
					<div className="flex items-center gap-1">
						<Eye className="h-4 w-4" />
						<span>{material.views || 0}</span>
					</div>
					<div className="flex items-center gap-1">
						<Download className="h-4 w-4" />
						<span>{material.downloads || 0}</span>
					</div>
				</div>
				<Button asChild size="sm">
					<Link
						href={material.url}
						target="_blank"
						download={`academic-portal-${material.title}.${removeExtensionFromLink(material.url)}`}
					>
						<Download className="mr-2 h-4 w-4" />
						Download
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
