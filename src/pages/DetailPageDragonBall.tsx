import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ErrorDisplay from "../components/ErrorDisplay";

import type { IDetailDragonBall } from "../types/IDetailDragonBall";
import { dbzApi } from "../api/axiosInstances";

export default function DetailPageDragonBall() {
    const { id } = useParams();
    const { data, error, isLoding } = useFetch<IDetailDragonBall>(dbzApi, id || "");
      

    if (isLoding) {
        return (
            <div className="p-10 text-center bg-[#8A9294]/10 min-h-screen flex items-center justify-center">
                <div className="text-[#072083] font-black animate-bounce text-2xl md:text-4xl italic tracking-tighter">
                    CARGANDO KI... <span className="text-[#F85B1A]">!!!</span>
                </div>
            </div>
        );
    }
    if (error) {
        return (
            <ErrorDisplay path="/dragonball" />
        );
    }

    if(!data){
        return (
            <ErrorDisplay path="/dragonball"/>
        )
    }





    return (
        <div className="min-h-screen bg-[#8A9294]/10 p-4 sm:p-6 md:p-12">
            <div className="max-w-6xl mx-auto space-y-10 md:space-y-16">

                {/* --- BOTÓN REGRESAR --- */}
                <div className="flex justify-start">
                    <Link
                        to="/dragonball"
                        className="group flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-lg border-b-4 border-[#072083] hover:border-[#F85B1A] transition-all active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#072083] group-hover:text-[#F85B1A] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-[#072083] font-black uppercase italic text-sm tracking-tighter group-hover:text-[#F85B1A]">
                            Regresar al Radar
                        </span>
                    </Link>
                </div>

                {/* --- SECCIÓN HERO --- */}
                <div className="relative bg-[#072083] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border-b-[8px] md:border-b-[12px] border-[#F85B1A]">

                    {/* Imagen Principal - Ajuste Mobile */}
                    <div className="w-full md:w-2/5 bg-gradient-to-br from-white/10 to-transparent p-8 md:p-10 flex items-center justify-center min-h-[300px]">
                        <img
                            src={data?.image}
                            alt={data?.name}
                            className="w-full h-auto max-h-[350px] md:max-h-[500px] object-contain drop-shadow-[0_0_35px_rgba(248,91,26,0.6)] transform hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    {/* Info Principal - Ajuste Textos */}
                    <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center text-center md:text-left">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                            <span className="bg-[#F85B1A] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">
                                {data?.affiliation}
                            </span>
                            <span className="text-[#E59982] font-bold text-xs md:text-sm uppercase tracking-widest">
                                {data?.race}
                            </span>
                        </div>

                        <h1 className="text-[#FFD7C1] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
                            {data?.name}
                        </h1>

                        <p className="text-white/80 leading-relaxed text-base md:text-lg font-medium border-l-0 md:border-l-4 border-[#F85B1A] md:pl-6 mb-8 italic">
                            {data?.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            <div className="bg-black/30 p-4 md:p-5 rounded-3xl border border-white/10">
                                <p className="text-[#8A9294] text-[10px] uppercase font-bold mb-1 tracking-widest">Ki Base</p>
                                <p className="text-[#FFD7C1] font-black text-xl md:text-2xl">{data?.ki}</p>
                            </div>
                            <div className="bg-black/30 p-4 md:p-5 rounded-3xl border border-white/10">
                                <p className="text-[#8A9294] text-[10px] uppercase font-bold mb-1 tracking-widest">Máximo Poder</p>
                                <p className="text-[#F85B1A] font-black text-xl md:text-2xl uppercase">{data?.maxKi}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- GRID DE TRANSFORMACIONES --- */}
                <div className="space-y-6 md:space-y-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-[#072083] text-3xl md:text-4xl font-black uppercase italic tracking-tighter">Transformaciones</h2>
                        <div className="h-1.5 flex-1 bg-gradient-to-r from-[#F85B1A] to-transparent rounded-full opacity-50"></div>
                    </div>

                    {/* Ajuste de columnas para tablet y mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {data?.transformations?.map((trans) => (
                            <div
                                key={trans.id}
                                className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border-2 border-transparent hover:border-[#F85B1A] transition-all duration-500"
                            >
                                <div className="h-60 md:h-72 bg-[#8A9294]/5 overflow-hidden flex items-center justify-center p-6">
                                    <img
                                        src={trans.image}
                                        alt={trans.name}
                                        className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-700"
                                    />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-[#072083] via-[#072083]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                                    <h3 className="text-xl md:text-2xl font-black uppercase italic text-[#FFD7C1] mb-2">{trans.name}</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-black text-[#F85B1A] uppercase italic">
                                            <span>Nivel de Ki</span>
                                            <span>{trans.ki}</span>
                                        </div>
                                        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#F85B1A] w-full animate-[pulse_1s_infinite]"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 md:p-5 bg-white text-center border-t border-[#8A9294]/10 group-hover:bg-[#072083] transition-colors">
                                    <p className="text-[#072083] font-black uppercase italic tracking-widest text-xs md:text-sm group-hover:text-white">
                                        {trans.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- PLANETA DE ORIGEN --- */}
                {data?.originPlanet && (
                    <div className="bg-[#072083] p-1 rounded-[2.5rem] md:rounded-[3rem] shadow-xl overflow-hidden">
                        <div className="bg-white p-6 md:p-10 rounded-[2.3rem] md:rounded-[2.8rem] flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
                            <div className="relative shrink-0">
                                <img
                                    src={data.originPlanet.image}
                                    alt={data.originPlanet.name}
                                    className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-4 md:border-8 border-[#F85B1A] shadow-lg shadow-[#F85B1A]/30"
                                />
                                {data.originPlanet.isDestroyed && (
                                    <div className="absolute -top-1 -right-1 bg-red-600 text-white text-[8px] md:text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-lg animate-pulse">
                                        Destruido
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 space-y-2 md:space-y-3">
                                <h3 className="text-[#072083] font-black text-2xl md:text-3xl uppercase italic tracking-tighter leading-tight">
                                    Planeta {data.originPlanet.name}
                                </h3>
                                <p className="text-[#8A9294] text-sm md:text-lg font-medium italic leading-relaxed">
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