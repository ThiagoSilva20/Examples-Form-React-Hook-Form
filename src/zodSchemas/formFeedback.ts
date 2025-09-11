import * as z from "zod"
import { feedbackOptions } from "@/lib/constants/feedback"

export const FeedbackFormSchemas = () => z.object({
    firstName: z.string().min(1, "Nome é obrigatório").min(3, "Nome deve ter no mínimo 3 caracteres"),
    lastName: z.string().min(1, "Sobrenome é obrigatório").min(3, "Sobrenome deve ter no mínimo 3 caracteres"),
    email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
    encontrou: z.enum(feedbackOptions.encontrou).refine((data) => data.length === 0, { message: "Encontrou é obrigatório" }),
    satisfacao: z.enum(feedbackOptions.satisfacao).refine((data) => data.length === 0, { message: "Satisfação é obrigatório" }),
    experiencia: z.enum(feedbackOptions.experiencia).refine((data) => data.length === 0, { message: "Experiência é obrigatório" }),
})

export type FeedbackTypeForm = z.infer<ReturnType<typeof FeedbackFormSchemas>>