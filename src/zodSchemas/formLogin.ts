import { z } from "zod"

export const formLoginSchema = () => (
  z.object({
    username: z.string()
      .nonempty("Username é obrigatório")
      .min(3, "Username deve ter pelo menos 3 caracteres"),
    password: z.string()
      .nonempty("Senha é obrigatória")
      .min(8, "Senha deve ter pelo menos 8 caracteres"),
  })
)

export type loginTypeForm = z.infer<ReturnType<typeof formLoginSchema>>

export default formLoginSchema