import type { CommentType } from "../types/CommentType";

interface Props {
  comment: CommentType;
  onDelete: (id: string) => void;
  onEdit: (comment: CommentType) => void;
}

export default function Comment({ comment, onDelete, onEdit }: Props) {
  return (
    <div className="bg-white p-5 md:p-6 rounded-[2rem] shadow-md border-2 border-[#8A9294]/10 hover:shadow-lg max-w-2xl mx-auto mb-4 overflow-hidden transition-shadow">
      
      {/* CABECERA: Avatar, Info y Botones */}
      <div className="flex justify-between items-start mb-4 gap-2">
        
        {/* LADO IZQUIERDO: Avatar y Texto (Nombre/Email) */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Avatar con shrink-0 para que no se aplaste */}
          <div className="w-10 h-10 bg-[#072083] rounded-full flex items-center justify-center text-[#FFD7C1] font-black italic shadow-inner shrink-0">
            {comment.name.charAt(0).toUpperCase()}
          </div>
          
          {/* Contenedor de texto con min-w-0 para permitir truncado */}
          <div className="min-w-0">
            <h4 className="font-black text-[#072083] uppercase italic leading-none truncate text-sm md:text-base">
              {comment.name}
            </h4>
            <span className="text-[9px] md:text-[10px] text-[#8A9294] font-medium tracking-widest block truncate mt-1">
              {comment.email}
            </span>
          </div>
        </div>

        {/* LADO DERECHO: Botones de Acción (SVG corregidos) */}
        <div className="flex flex-row flex-nowrap shrink-0 gap-1">
          
          {/* BOTÓN EDITAR */}
          <button 
            onClick={() => onEdit(comment)} 
            className="p-2 rounded-full transition-all duration-200 group hover:bg-[#bae6fd]/40 active:scale-90" 
            title="Editar"
          >
            <svg 
              className="w-5 h-5 stroke-[#8A9294] group-hover:stroke-[#072083] transition-colors" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>

          {/* BOTÓN ELIMINAR */}
          <button 
            onClick={() => onDelete(comment.id)} 
            className="p-2 rounded-full transition-all duration-200 group hover:bg-red-50 active:scale-90" 
            title="Eliminar"
          >
            <svg 
              className="w-5 h-5 stroke-[#8A9294] group-hover:stroke-red-500 transition-colors" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 7H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M6 7V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>

        </div>
      </div>

      {/* CUERPO DEL COMENTARIO: Manejo de texto largo */}
      <p className="text-[#44281d] text-sm leading-relaxed border-l-4 border-[#97ce4c] pl-4 italic break-words whitespace-pre-wrap">
        "{comment.body}"
      </p>

      {/* FOOTER: Fecha */}
      <div className="pt-4 flex justify-end text-[9px] md:text-[10px] font-black uppercase text-[#8A9294] border-t mt-4 border-[#8A9294]/10 tracking-widest">
        <span className="opacity-60">
           {comment.date ? new Date(comment.date).toLocaleString('es-ES', { 
             day: '2-digit', 
             month: '2-digit', 
             year: 'numeric', 
             hour: '2-digit', 
             minute: '2-digit' 
           }) : 'Sin fecha'}
        </span>
      </div>
    </div>
  );
}