import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { IDetailRickAndMorty } from "../types/IDetailRickAndMorty";
import { rickAndMortyApi } from "../api/axiosInstances";
export  default function DetailPageRickAndMorty() {
  const { id } = useParams();
  const { data, error, isLoding } = useFetch<IDetailRickAndMorty>(rickAndMortyApi,id||"");
  console.log("data in rick",data);
  if (error) return (
    <div className="min-h-screen bg-[#44281d] flex items-center justify-center p-4">
      <div className="bg-white border-4 border-[#e89ac7] p-8 rounded-3xl text-[#44281d] font-bold shadow-[0_0_20px_#e89ac7]">
        ¡Wubba Lubba Dub-Dub! Error: {error}
      </div>
    </div>
  );

  if (isLoding) return (
    <div className="min-h-screen bg-[#bae6fd]/20 flex items-center justify-center">
      <div className="w-20 h-20 border-8 border-t-[#97ce4c] border-[#44281d] rounded-full animate-spin"></div>
    </div>
  );

  if (!data) return null;

  return (
    <div className="min-h-screen bg-[#bae6fd]/10 p-4 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* TARJETA PRINCIPAL ESTILO PORTAL */}
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#97ce4c] relative">
          
          {/* Decoración de fondo (Brillo de portal) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#97ce4c]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

          <div className="flex flex-col md:flex-row">
            
            {/* SECCIÓN IMAGEN */}
            <div className="md:w-2/5 p-8 flex items-center justify-center bg-[#44281d]/5">
              <div className="relative group">
                <img 
                  src={data.image} 
                  alt={data.name} 
                  className="rounded-full w-64 h-64 object-cover border-8 border-[#97ce4c] shadow-[0_0_30px_#97ce4c50] transform group-hover:rotate-3 transition-transform duration-500"
                />
                <div className={`absolute bottom-4 right-4 px-4 py-1 rounded-full text-white font-black text-xs uppercase ${data.status === 'Alive' ? 'bg-[#97ce4c]' : 'bg-[#e89ac7]'}`}>
                  {data.status}
                </div>
              </div>
            </div>

            {/* SECCIÓN INFORMACIÓN */}
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center space-y-6">
              <div>
                <h1 className="text-5xl font-black text-[#44281d] uppercase tracking-tighter italic">
                  {data.name}
                </h1>
                <p className="text-[#97ce4c] font-bold text-xl uppercase tracking-widest">
                  {data.species} — {data.gender}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f0e14a]/10 p-4 rounded-2xl border-l-4 border-[#f0e14a]">
                  <p className="text-[#44281d]/50 text-xs font-black uppercase">Última Ubicación</p>
                  <p className="text-[#44281d] font-bold text-lg leading-tight">{data.location?.name}</p>
                </div>
                
                <div className="bg-[#bae6fd]/20 p-4 rounded-2xl border-l-4 border-[#bae6fd]">
                  <p className="text-[#44281d]/50 text-xs font-black uppercase">Apariciones</p>
                  <p className="text-[#44281d] font-bold text-lg">{data.episode.length} Episodios</p>
                </div>
              </div>

              {/* METADATOS */}
              <div className="pt-4 border-t border-[#44281d]/10 flex justify-between items-center text-[#44281d]/40 text-[10px] font-bold uppercase tracking-widest">
                <span>ID: {data.id}</span>
                <span>Registro: {new Date(data.created).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* LISTADO DE EPISODIOS (EXTRA) */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {data.episode.slice(0, 12).map((ep, index) => (
                <div key={index} className="bg-[#44281d] text-[#97ce4c] text-[10px] p-2 rounded-lg text-center font-black opacity-80 hover:opacity-100 transition-opacity">
                    EP-{ep.split('/').pop()}
                </div>
            ))}
            {data.episode.length > 12 && (
                <div className="bg-[#e89ac7] text-white text-[10px] p-2 rounded-lg text-center font-black">
                    +{data.episode.length - 12} MÁS
                </div>
            )}
        </div>
      </div>
    </div>
  );
}