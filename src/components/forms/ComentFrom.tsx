import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { postComments } from '../../services/comments';
import type {Comment} from "../../schemas/comment.schema"
import  {commentSchema} from "../../schemas/comment.schema"

export default function CommentForm() {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<Comment>({ resolver: zodResolver(commentSchema)});

    const onFormSubmit = (data: Comment) => {
        console.log("Comentario enviado:", data);
        //alert("¡Tu comentario ha sido enviado con éxito!");
        postComments(data);
        //getComments();
        reset();
    };

    return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-[2.5rem] shadow-2xl border-b-8 border-[#F85B1A]">
            <h2 className="text-[#072083] text-3xl font-black uppercase italic mb-6 tracking-tighter">
                Deja tu <span className="text-[#F85B1A]">Comentario</span>
            </h2>

            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">

                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-[#072083] font-bold uppercase text-xs ml-2">Título</label>
                    <input
                        type="text"
                        {...register("name")}
                        placeholder="Pienso que Goku es..."
                        className={`p-4 rounded-2xl border-2 outline-none transition-all ${errors.name ? 'border-[#e89ac7] bg-[#e89ac7]/5' : 'border-[#8A9294]/20 focus:border-[#072083]'}`}
                    />
                    {errors.name && <span className="text-[#F85B1A] text-[10px] font-black uppercase ml-2 italic">{errors.name.message}</span>}
                </div>


                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-[#072083] font-bold uppercase text-xs ml-2">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        placeholder="tu-correo@ejemplo.com"
                        className={`p-4 rounded-2xl border-2 outline-none transition-all ${errors.email ? 'border-[#e89ac7] bg-[#e89ac7]/5' : 'border-[#8A9294]/20 focus:border-[#072083]'}`}
                    />
                    {errors.email && <span className="text-[#F85B1A] text-[10px] font-black uppercase ml-2 italic">{errors.email.message}</span>}
                </div>


                <div className="flex flex-col gap-1">
                    <label htmlFor="body" className="text-[#072083] font-bold uppercase text-xs ml-2">Comentario</label>
                    <textarea
                        {...register("body")}
                        rows={4}
                        placeholder="Escribe aquí tu opinión..."
                        className={`p-4 rounded-2xl border-2 outline-none transition-all resize-none ${errors.body ? 'border-[#e89ac7] bg-[#e89ac7]/5' : 'border-[#8A9294]/20 focus:border-[#072083]'}`}
                    ></textarea>
                    {errors.body && <span className="text-[#F85B1A] text-[10px] font-black uppercase ml-2 italic">{errors.body.message}</span>}
                </div>

                {/* BOTÓN SUBMIT */}
                <button
                    type="submit"
                    className="w-full py-4 bg-[#F85B1A] text-white font-black uppercase italic rounded-2xl shadow-lg hover:bg-[#072083] hover:shadow-[#072083]/30 transition-all active:scale-95"
                >
                    Enviar Comentario
                </button>
            </form>
        </div>
    );
}