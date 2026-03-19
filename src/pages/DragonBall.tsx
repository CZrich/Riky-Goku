import { useQuery,keepPreviousData} from "@tanstack/react-query";
import { genericFetcher } from "../api";
import type { IGoku } from "../types/IGoku";
import type { IApiResponse } from "../types/IGenericApiResponse";
import { CardView } from "../components/CardView";
import { SearchBar } from "../components/SearchBar";
import { useState } from "react";
import { CardGridSkeleton } from "../components/CardGridSkeleton";
import { dbzApi } from "../api/axiosInstances";
import { Pagination } from "../components/Pagination";
export default function DragonBall() {
   
    const [search, setSearch] = useState("");
    const [page,setPage]=useState(0)
    const { data, isError, isPending, error, isPlaceholderData } = useQuery(
        {
            queryKey: ["characters",page+1],
            queryFn: () => {
                const res = genericFetcher<IApiResponse<IGoku>>(dbzApi,`?page=${page+1}`)
                return res;
            },
            placeholderData:keepPreviousData,
            staleTime:2*3000



        });

    const nextPage=()=>(setPage(prev=>prev+1))
    const prevPage =()=>(setPage(prev=>Math.max(prev - 1, 0)))
    const hasNextPage= !!data?.links?.next;
     console.log("hasnext",hasNextPage)
    console.log("pagina",page)
    console.log(data);

    // Filtramos usando filterQuery
    const filteredCharacters = data?.items?.filter(char =>
        char.name.toLowerCase().includes(search.toLowerCase())
    ) || []

    if (isPending) {
        return (

            <CardGridSkeleton />
        )
    }
    if (isError) {
        return <div> Error:{error.message}</div>
    }

    return (
        <div className="min-h-screen bg-[#8A9294]/20 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Contenedor de Búsqueda con colores de Goku */}
                <div className="bg-[#072083] p-8 rounded-[2rem] shadow-2xl border-b-8 border-[#F85B1A] transition-all hover:shadow-[#F85B1A]/20">
                    <h1 className="text-[#FFD7C1] text-4xl font-black mb-6 uppercase tracking-tighter italic">
                        Archivo de <span className="text-[#F85B1A]">Guerreros Z</span>
                    </h1>

                    <div className="bg-white/10 p-2 rounded-2xl border border-[#E59982]/30 backdrop-blur-sm">
                        <SearchBar
                            value={search}
                            onChange={setSearch}
                            placeholder="Busca un guerrero..."
                        />
                    </div>
                </div>

                <Pagination
                page={page}
                isPlaceData={isPlaceholderData}
                prevPage={prevPage}
                nextPage={nextPage}
                
                isNextDisabled={!hasNextPage}

                />

                {/* Grid de Personajes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6">
                    {
                        search && filteredCharacters.length === 0 ? (
                            <div className="col-span-full text-center py-20 bg-[#FFD7C1] border-4 border-dashed border-[#F85B1A] rounded-[3rem] text-[#072083] font-black text-2xl uppercase italic">
                                "¡Rayos! No se encontró a ni uno en este sector del universo..."
                            </div>
                        ) : (
                            filteredCharacters?.map((goku) => (
                                <div
                                    key={goku.id}
                                    className="bg-white p-3 rounded-[2rem] border-2 border-[#8A9294]/30 shadow-lg hover:border-[#F85B1A] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                                >
                                    <CardView
                                        id={goku.id}
                                        ruta={"dragonball"}
                                        key={goku.id}
                                        title={goku.name}
                                        subtitle={goku.race}
                                        image={goku.image}
                                        badge={goku.affiliation}
                                        description={goku.description}
                                        footerInfo={`Max Ki: ${goku.maxKi}`}
                                    />

                                    {/* Detalle decorativo: Línea de energía Heliconia */}
                                    <div className="mt-4 flex justify-center gap-1">
                                        <div className="h-1.5 w-16 bg-[#F85B1A] rounded-full shadow-[0_0_8px_#F85B1A]" />
                                        <div className="h-1.5 w-4 bg-[#072083] rounded-full" />
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
}
