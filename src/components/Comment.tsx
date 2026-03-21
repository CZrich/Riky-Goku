import type { CommentType } from "../types/CommentType";

interface Props {
  comment: CommentType;
  onDelete: (id: string) => void;
  onEdit: (comment: CommentType) => void; 
}

export default function Comment({ comment, onDelete, onEdit }: Props) {
  return (
    <div className="bg-white p-6 rounded-[2rem] shadow-md border-2 border-[#8A9294]/10 hover:shadow-lg max-w-2xl mx-auto mb-4">
      <div className="flex justify-between items-start mb-4">
        
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#072083] rounded-full flex items-center justify-center text-[#FFD7C1] font-black italic shadow-inner">
              {comment.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h4 className="font-black text-[#072083] uppercase italic leading-none">{comment.name}</h4>
              <span className="text-[10px] text-[#8A9294] font-medium tracking-widest">{comment.email}</span>
            </div>
        </div>

        <div className="flex gap-2">
          {/* ✨ Cuando hacen click, mandamos TODO el comentario hacia arriba */}
          <button onClick={() => onEdit(comment)} className="p-2 hover:bg-[#bae6fd]/30 rounded-full group" title="Editar">
             ✏️
          </button>
          <button onClick={() => onDelete(comment.id)} className="p-2 hover:bg-red-50 rounded-full group text-red-500" title="Eliminar">
             🗑️
          </button>
        </div>
      </div>

      <p className="text-[#44281d] text-sm leading-relaxed border-l-4 border-[#97ce4c] pl-4 italic">
        "{comment.body}"
      </p>

      {/* FOOTER */}
      <div className="pt-4 flex justify-end text-[10px] font-black uppercase text-[#8A9294] border-t mt-4 border-[#8A9294]/10">
        <span className="opacity-60">
           {comment.date ? new Date(comment.date).toLocaleString('es-ES') : ''}
        </span>
      </div>
    </div>
  );
}
