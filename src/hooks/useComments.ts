import { useLocalStorage } from "./useLocalStorage";
import type { CommentType } from "../schemas/comment.schema";
import toast from 'react-hot-toast';
export const useComments = () => {
  // Inicializamos con un array de CommentType
  const { storedData: comments, setValue: setComments } = useLocalStorage<CommentType[]>("comments", []);

  // ADD: Toma el estado anterior 'prev', le añade el nuevo elemento al principio
  const addComment = (newComment: Omit<CommentType, "id" | "date">) => {
    try {
      const commentWithMeta: CommentType = {
        ...newComment,
        id: crypto.randomUUID(),
        date: new Date().toISOString(),
      };

      // Le pasamos un callback a setComments para tener la versión más fresca de los datos
      setComments((prev) => [commentWithMeta, ...prev]);
       toast.success("comentario publicado")
    } catch (err) {
      if (err) {
        toast.error("no se puedo agregar")
      }
    }

  };

  // UPDATE: Recorre el array anterior y actualiza solo el que coincida
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

  // DELETE: Filtra y remueve el ID
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
