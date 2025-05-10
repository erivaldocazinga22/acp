import { z } from "zod";

export const materialSchema = z.object({
	id: z.string().cuid(),
	title: z.string(),
	image: z.string().url(),
	url: z.string().url(),
	type: z.string(),
	discipline: z.string(),
	academic_year: z.string(),
	semester: z.string(),
	institution: z.string(),
	downloads: z.number(),
	views: z.number(),
	fileType: z.string(),
	fileSize: z.number(),
	createdAt: z.string(),
	updatedAt: z.string(),
});

export type Material = z.infer<typeof materialSchema>;
