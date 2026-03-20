import { useState } from "react";
import CommentForm from "../components/forms/ComentFrom";
import FeedComments from "../components/FeedComments";
import { useComments } from "../hooks/useComments";
import type { CommentType } from "../schemas/comment.schema";

export default function CommenPage() {
  const { comments, addComment, updateComment, deleteComment } = useComments();
  
  // ✨ NUEVO ESTADO: Guarda el comentario que estamos editando (null si estamos creando uno nuevo)
  const [editingComment, setEditingComment] = useState<CommentType | null>(null);

  // Cuando se envía el formulario, decidimos si fue CREAR o ACTUALIZAR
  const handleFormSubmit = (data: Omit<CommentType, "id" | "date">) => {
    if (editingComment) {
      updateComment(editingComment.id, data);
      setEditingComment(null); // Limpiamos el estado después de editar
    } else {
      addComment(data);
    }
  };

  // Función para cancelar la edición desde el formulario
  const cancelEdit = () => {
    setEditingComment(null);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-12">
      <CommentForm 
        onSubmit={handleFormSubmit} 
        editingComment={editingComment} 
        onCancelEdit={cancelEdit}
      />
      
      <FeedComments 
        comments={comments} 
        onDelete={deleteComment} 
        onEdit={(comment) => setEditingComment(comment)} // ✨ Pasamos el comentario entero al estado
      />
    </div>
  );
}
