import * as z from "zod"

export const listFormSchemas = () => z.object({
    name: z.string().min(1, "Nome é obrigatório").min(3, "Nome deve ter no mínimo 3 caracteres"),
    list: z.array(
        z.object({
            value: z.string().min(1, "Item é obrigatório").min(3, "Item deve ter no mínimo 3 caracteres")
        })
    ).min(1, "Adicione pelo menos um item"),
})

export type listTypeForm = z.infer<ReturnType<typeof listFormSchemas>>