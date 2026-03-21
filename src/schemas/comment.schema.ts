import { z} from "zod"


export const commentSchema=z.object({
    name:z.string().min(3, "el titulo debe terner almenos 3 caracteres").max(20,"deeb terner como maximo  20 caracteres"),
    email:z.email({message:"correo invalido"}),
    body:z.string().min(3,"debe tener mas de de 3 caracteres"), 

})

 export type CommentFormValues=z.infer<typeof commentSchema>;