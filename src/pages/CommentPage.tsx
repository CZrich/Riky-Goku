import { useState } from "react";
import CommentForm from "../components/forms/ComentFrom";
import FeedComments from "../components/FeedComments";
import { useComments } from "../hooks/useComments";
import type { CommentType } from "../types/CommentType";
import  type { CommentFormValues } from "../schemas/comment.schema";

export default function CommenPage() {
  const { comments, addComment, updateComment, deleteComment } = useComments();
  
  
  const [editingComment, setEditingComment] = useState<CommentType | null>(null);

  const handleFormSubmit = (data:CommentFormValues) => {
    if (editingComment) {
      updateComment(editingComment.id, data);
      setEditingComment(null); 
    } else {
      addComment(data);
    }
  };

 
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
        onEdit={(comment) => setEditingComment(comment)} 
      />
    </div>
  );
}
