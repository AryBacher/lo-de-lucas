import { z } from "zod"

export const FormSchema = z.object({
  name: z
    .string()
    .max(20, { message: "El nombre es muy largo" })
    .min(3, { message: "El nombre es muy corto" }),
  lastname: z
    .string()
    .max(20, { message: "El apellido es muy largo" })
    .min(1, { message: "El apellido es muy corto" }),
  message: z
    .string()
    .min(2, { message: "El mensaje es muy corto" })
    .max(500, { message: "El mensaje es muy largo" }),
})
