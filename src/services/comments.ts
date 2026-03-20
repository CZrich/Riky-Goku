import { commentsApi } from "../api/axiosInstances"
import type { Comment } from "../schemas/comment.schema";
export const  postComments = async (data:Comment)=>{
    const response = await commentsApi.post( "/comments",data);
    console.log("enviado con exito");
    return response.data;

}
export const getComments = async () => {
    const response = await commentsApi.get("/comments");
   console.log(response.data)
    return response.data; 
};