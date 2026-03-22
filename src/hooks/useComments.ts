import { useLocalStorage } from "./useLocalStorage";
import type { CommentFormValues } from "../schemas/comment.schema";
import type {CommentType} from '../types/CommentType'
import toast from 'react-hot-toast';
export const useComments = () => {
 
  const { storedData: comments, setValue: setComments } = useLocalStorage<CommentType[]>("comments", []);

  // ADD:
  const addComment = (newComment: CommentFormValues) => {
    try {
      const commentWithMeta: CommentType = {
        ...newComment,
        id: crypto.randomUUID(),
        date: new Date().toISOString(),
      };

      // 
      setComments((prev) => [commentWithMeta, ...prev]);
       toast.success("comentario publicado")
    } catch (err) {
      if (err) {
        toast.error("no se puedo agregar")
      }
    }

  };

  // UPDATE:
  const updateComment = (id: string, updatedData: Partial<CommentType>) => {
    try {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === id ? { ...comment, ...updatedData } : comment
        )
      );
      toast.success("commentario actualizado")

    } catch (err) {
      if (err) {
        toast.error("error al actualizar")
      }
    }

  };

  // DELETE: 
  const deleteComment = (id: string) => {
    try {
      setComments((prev) => prev.filter((comment) => comment.id !== id));
      toast.success("comentario eliminado ...")
    } catch (error) {
      if (error) {
        toast.error("no se pudo eliminar")
      }
    }

  };

  return { comments, addComment, updateComment, deleteComment };
};
