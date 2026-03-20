import type { CommentType } from "../schemas/comment.schema";
import Comment from "./Comment";

interface Props {
  comments: CommentType[];
  onDelete: (id: string) => void;
  // ✨ 1. Debes declarar que FeedComments recibe onEdit desde la página principal
  onEdit: (comment: CommentType) => void; 
}

export default function FeedComments({ comments, onDelete, onEdit }: Props) {
  if (comments.length === 0) {
    return <p className="text-center text-[#8A9294] italic mt-10">No hay comentarios aún. ¡Sé el primero!</p>;
  }

  return (
    <div className="space-y-4">
      {comments.map((com) => (
        <Comment
          key={com.id}
          comment={com}
          onDelete={onDelete}
          // ✨ 2. Faltaba esta línea: Tienes que pasarle el onEdit hacia el componente hijo
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
}
