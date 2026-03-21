import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { IDetailRickAndMorty } from "../types/IDetailRickAndMorty";
import { rickAndMortyApi } from "../api/axiosInstances";

export default function DetailPageRickAndMorty() {
  const { id } = useParams();
  const { data, error, isLoding } = useFetch<IDetailRickAndMorty>(rickAndMortyApi, id || "");

  if (error) return (
    <div className="min-h-screen bg-[#44281d] flex items-center justify-center p-6">
      <div className="bg-white border-4 border-[#e89ac7] p-8 rounded-[2rem] text-center shadow-[0_0_30px_rgba(232,154,199,0.4)]">
        <h2 className="text-[#44281d] font-black uppercase text-2xl mb-4 italic">¡Wubba Lubba Dub Dub! (Error)</h2>
        <Link to="/rickandmorty" className="bg-[#97ce4c] text-[#44281d] px-6 py-2 rounded-full font-black uppercase text-xs">Volver</Link>
      </div>
    </div>
  );

  if (isLoding) return (
    <div className="min-h-screen bg-[#bae6fd]/20 flex flex-col items-center justify-center gap-4">
      <div className="w-20 h-20 border-8 border-t-[#97ce4c] border-[#44281d] rounded-full animate-spin shadow-[0_0_20px_#97ce4c]"></div>
      <span className="text-[#44281d] font-black uppercase italic tracking-tighter animate-pulse">Abriendo Portal...</span>
    </div>
  );

  if (!data) return null;

  return (
    <div className="min-h-screen bg-[#bae6fd]/10 p-4 sm:p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8 md:space-y-10">
        
        {/* --- BOTÓN REGRESAR --- */}
        <div className="flex justify-start">
          <Link 
            to="/rickandmorty" 
            className="group flex items-center gap-3 bg-[#44281d] px-6 py-3 rounded-2xl shadow-lg hover:bg-[#97ce4c] transition-all active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#97ce4c] group-hover:text-[#44281d] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-white font-black uppercase italic text-sm tracking-tighter group-hover:text-[#44281d]">
              Regresar a la Ciudadela
            </span>
          </Link>
        </div>

        {/* --- TARJETA PRINCIPAL ESTILO PORTAL --- */}
        <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#97ce4c] relative">
          
          {/* Brillo de portal (Fondo) */}
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#97ce4c]/10 rounded-full -mr-24 -mt-24 md:-mr-32 md:-mt-32 blur-3xl"></div>
            
          <div className="flex flex-col md:flex-row">
            
            {/* SECCIÓN IMAGEN - Adaptada a mobile */}
            <div className="w-full md:w-2/5 p-8 flex items-center justify-center bg-[#44281d]/5 relative overflow-hidden">
              <div className="relative group z-10">
                <img 
                  src={data.image} 
                  alt={data.name} 
                  className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover border-8 border-[#97ce4c] shadow-[0_0_30px_#97ce4c50] transform group-hover:rotate-6 transition-transform duration-500"
                />
                <div className={`absolute bottom-2 right-2 md:bottom-4 md:right-4 px-4 py-1 rounded-full text-white font-black text-[10px] md:text-xs uppercase shadow-lg ${data.status === 'Alive' ? 'bg-[#97ce4c]' : 'bg-[#e89ac7]'}`}>
                  {data.status}
                </div>
              </div>
              {/* Efecto decorativo solo en imagen */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle,_#97ce4c_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
            </div>

            {/* SECCIÓN INFORMACIÓN - Alineación responsiva */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center space-y-6 text-center md:text-left">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#44281d] uppercase tracking-tighter italic leading-none">
                  {data.name}
                </h1>
                <p className="text-[#97ce4c] font-bold text-lg md:text-xl uppercase tracking-widest mt-2">
                  {data.species} <span className="text-[#e89ac7]">/</span> {data.gender}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f0e14a]/10 p-5 rounded-3xl border-l-8 border-[#f0e14a]">
                  <p className="text-[#44281d]/40 text-[10px] font-black uppercase tracking-widest">Última Ubicación</p>
                  <p className="text-[#44281d] font-bold text-base md:text-lg leading-tight mt-1">
                    {data.location?.name}
                  </p>
                </div>
                
                <div className="bg-[#bae6fd]/30 p-5 rounded-3xl border-l-8 border-[#bae6fd]">
                  <p className="text-[#44281d]/40 text-[10px] font-black uppercase tracking-widest">Apariciones</p>
                  <p className="text-[#44281d] font-bold text-base md:text-lg mt-1 italic">
                    {data.episode.length} Episodios Registrados
                  </p>
                </div>
              </div>

              {/* METADATOS - Footer de la tarjeta */}
              <div className="pt-6 border-t border-[#44281d]/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-[#44281d]/30 text-[9px] font-bold uppercase tracking-[0.2em]">
                <span>ID DEL SUJETO: {data.id}</span>
                <span>FECHA DE REGISTRO: {new Date(data.created).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- LISTADO DE EPISODIOS --- */}
        <div className="space-y-4">
            <h3 className="text-[#44281d] font-black uppercase italic tracking-widest text-sm text-center md:text-left">Fragmentos del Multiverso (Episodios)</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {data.episode.slice(0, 16).map((ep, index) => (
                    <div key={index} className="bg-[#44281d] text-[#97ce4c] text-[10px] p-3 rounded-xl text-center font-black border-b-2 border-transparent hover:border-[#97ce4c] transition-all cursor-default">
                        S{ep.split('/').pop()}
                    </div>
                ))}
                {data.episode.length > 16 && (
                    <div className="bg-[#e89ac7] text-white text-[10px] p-3 rounded-xl text-center font-black animate-pulse">
                        +{data.episode.length - 16}
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}