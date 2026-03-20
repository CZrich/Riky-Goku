import {z} from "zod"


export const commentSchema=z.object({
    name:z.string().min(3, "el titulo debe terner almenos 3 caracteres"),
    email:z.email({message:"correo invalido"}),
    body:z.string().min(3,"debe tener mas de de 3 caracteres")

})

 export type Comment=z.infer<typeof commentSchema>;