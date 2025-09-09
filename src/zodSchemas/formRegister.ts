import * as z from "zod"

export const registerFormSchemas = () => (
  z.object({
    first_name: z.string()
    .nonempty("Primeiro nome é obrigatório")
    .min(2, "Você deve inserir pelo menos 2 caracteres"),
    last_name: z.string()
    .nonempty("Sobrenome é obrigatório")
    .min(2, "Você deve inserir pelo menos 2 caracteres"),
  email: z.string()
    .nonempty("Email é obrigatório")
    .email("formato de email inválido"),
  date_of_birth: z.string()
    .nonempty("Data de nascimento é obrigatória"),
  sex: z.enum(["Male", "Female", "Outher"]),
  height: z.coerce.number()
    .min(30, "Altura deve ser no mínimo 30 cm")
    .max(260, "Altura deve ser no máximo 260 cm"),
  weight: z.coerce.number()
    .min(1, "Peso da pessoa deve ter no minimo 1 kg"),
  contact_number: z.string()
    .nonempty("Número de contato é obrigatório")
    .min(10, "Número de contato deve ter no mínimo 10 dígitos"),
  marital_status: z.enum(["Single", "Married", "Divorced", "Widowed"]),
  address_complete: z.object({
    street: z.string()
      .nonempty("Rua é obrigatória"),
    city: z.string()
      .nonempty("Cidade é obrigatória"),
    state: z.string()
      .nonempty("Estado é obrigatório"),
    zip_code: z.string()
      .nonempty("CEP é obrigatório")
    })
  })
)

export type registerTypeForm = z.infer<ReturnType<typeof registerFormSchemas>>

export default registerFormSchemas