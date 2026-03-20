import { z} from "zod"


export const commentSchema=z.object({
   id: z.string().default(() => crypto.randomUUID()),
    name:z.string().min(3, "el titulo debe terner almenos 3 caracteres"),
    email:z.email({message:"correo invalido"}),
    body:z.string().min(3,"debe tener mas de de 3 caracteres"),
    date:z.string().default(()=>new Date().toLocaleDateString())

})

 export type CommentType=z.infer<typeof commentSchema>;