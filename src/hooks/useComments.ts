import { useLocalStorage } from "./useLocalStorage";
import type { CommentType } from "../schemas/comment.schema";

export const useComments = () => {
  // Inicializamos con un array de CommentType
  const { storedData: comments, setValue: setComments } = useLocalStorage<CommentType[]>("comments", []);

  // ADD: Toma el estado anterior 'prev', le añade el nuevo elemento al principio
  const addComment = (newComment: Omit<CommentType, "id" | "date">) => {
    const commentWithMeta: CommentType = {
      ...newComment,
      id: crypto.randomUUID(), 
      date: new Date().toISOString(), 
    };
    
    // Le pasamos un callback a setComments para tener la versión más fresca de los datos
    setComments((prev) => [commentWithMeta, ...prev]);
  };

  // UPDATE: Recorre el array anterior y actualiza solo el que coincida
  const updateComment = (id: string, updatedData: Partial<CommentType>) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, ...updatedData } : comment
      )
    );
  };

  // DELETE: Filtra y remueve el ID
  const deleteComment = (id: string) => {
    setComments((prev) => prev.filter((comment) => comment.id !== id));
  };

  return { comments, addComment, updateComment, deleteComment };
};
