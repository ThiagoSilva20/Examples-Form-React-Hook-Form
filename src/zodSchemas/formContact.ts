import * as z from "zod"

export const contactFormSchemas = () => (
    z.object({
        name: z.string().nonempty("Nome é obrigatório").min(3, "Nome deve ter no mínimo 3 caracteres"),
        email: z.string().nonempty("Email é obrigatório").email("Email inválido"),
        phone: z.string().nonempty("Telefone é obrigatório"),
        message: z.string().nonempty("Mensagem é obrigatória").min(10, "Mensagem deve ter no mínimo 10 caracteres"),
    })
)

export type contactTypeForm = z.infer<ReturnType<typeof contactFormSchemas>>

export default contactFormSchemas