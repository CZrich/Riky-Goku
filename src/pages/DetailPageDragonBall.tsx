import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { IDetailDragonBall } from "../types/IDetailDragonBall";
import { dbzApi } from "../api/axiosInstances";
export default function DetailPageDragonBall() {
    const { id } = useParams();
    // Tipamos el hook con la interfaz corregida
    const { data, error, isLoding } = useFetch<IDetailDragonBall>(dbzApi,id || "");
    console.log(JSON.stringify(data,null,2))
    if (error) {
        return (
            <div className="p-10 text-center bg-[#8A9294]/10 min-h-screen">
                <div className="inline-block p-6 bg-white rounded-2xl border-2 border-[#F85B1A] text-[#072083] font-black uppercase">
                    ¡ERROR EN EL RADAR! No se encontró al guerrero: {error}
                </div>
            </div>
        );
    }

    if (isLoding) {
        return (
            <div className="p-10 text-center bg-[#8A9294]/10 min-h-screen flex items-center justify-center">
                <div className="text-[#072083] font-black animate-bounce text-3xl italic tracking-tighter">
                    CARGANDO KI... <span className="text-[#F85B1A]">!!!</span>
                </div>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="min-h-screen bg-[#8A9294]/10 p-4 md:p-12">
            <div className="max-w-6xl mx-auto space-y-16">
                
                {/* --- SECCIÓN HERO (PERSONAJE) --- */}
                <div className="relative bg-[#072083] rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border-b-[12px] border-[#F85B1A]">
                    {/* Imagen Principal */}
                    <div className="md:w-2/5 bg-gradient-to-br from-white/10 to-transparent p-10 flex items-center justify-center">
                        <img 
                            src={data.image} 
                            alt={data.name} 
                            className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_0_35px_rgba(248,91,26,0.6)] transform hover:scale-110 transition-transform duration-500" 
                        />
                    </div>
                    
                    {/* Info Principal */}
                    <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-2">
                            <span className="bg-[#F85B1A] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">
                                {data.affiliation}
                            </span>
                            <span className="text-[#E59982] font-bold text-sm uppercase tracking-widest">{data.race}</span>
                        </div>
                        
                        <h1 className="text-[#FFD7C1] text-7xl font-black uppercase italic tracking-tighter leading-none mb-6">
                            {data.name}
                        </h1>
                        
                        <p className="text-white/80 leading-relaxed text-lg font-medium border-l-4 border-[#F85B1A] pl-6 mb-8 italic">
                            {data.description}
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-black/30 p-5 rounded-3xl border border-white/10">
                                <p className="text-[#8A9294] text-xs uppercase font-bold mb-1">Ki Base</p>
                                <p className="text-[#FFD7C1] font-black text-2xl">{data.ki}</p>
                            </div>
                            <div className="bg-black/30 p-5 rounded-3xl border border-white/10">
                                <p className="text-[#8A9294] text-xs uppercase font-bold mb-1">Máximo Poder</p>
                                <p className="text-[#F85B1A] font-black text-2xl uppercase">{data.maxKi}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- GRID DE TRANSFORMACIONES --- */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-[#072083] text-4xl font-black uppercase italic tracking-tighter">Transformaciones</h2>
                        <div className="h-1.5 flex-1 bg-gradient-to-r from-[#F85B1A] to-transparent rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {data.transformations?.map((trans) => (
                            <div 
                                key={trans.id} 
                                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl border-2 border-transparent hover:border-[#F85B1A] transition-all duration-500"
                            >
                                {/* Imagen Transformación */}
                                <div className="h-72 bg-[#8A9294]/5 overflow-hidden flex items-center justify-center p-4">
                                    <img 
                                        src={trans.image} 
                                        alt={trans.name} 
                                        className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-700"
                                    />
                                </div>

                                {/* Overlay con Poder al Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#072083] via-[#072083]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <h3 className="text-2xl font-black uppercase italic text-[#FFD7C1] mb-2">{trans.name}</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-black text-[#F85B1A] uppercase italic">
                                            <span>Nivel de Ki</span>
                                            <span>{trans.ki}</span>
                                        </div>
                                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#F85B1A] w-full animate-[pulse_1s_infinite]"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Nombre visible siempre abajo */}
                                <div className="p-5 bg-white text-center border-t border-[#8A9294]/10 group-hover:bg-[#072083] transition-colors">
                                    <p className="text-[#072083] font-black uppercase italic tracking-widest text-sm group-hover:text-white">
                                        {trans.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- PLANETA DE ORIGEN --- */}
                {data.originPlanet && (
                    <div className="bg-[#072083] p-1 rounded-[3rem] shadow-xl overflow-hidden">
                        <div className="bg-white p-8 rounded-[2.8rem] flex flex-col md:flex-row items-center gap-10">
                            <div className="relative">
                                <img 
                                    src={data.originPlanet.image} 
                                    alt={data.originPlanet.name} 
                                    className="w-44 h-44 rounded-full object-cover border-8 border-[#F85B1A] shadow-lg shadow-[#F85B1A]/30" 
                                />
                                {data.originPlanet.isDestroyed && (
                                    <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase shadow-lg animate-pulse">
                                        Destruido
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 text-center md:text-left space-y-3">
                                <h3 className="text-[#072083] font-black text-3xl uppercase italic tracking-tighter">
                                    Planeta {data.originPlanet.name}
                                </h3>
                                <p className="text-[#8A9294] text-lg font-medium italic leading-relaxed">
                                    {data.originPlanet.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}