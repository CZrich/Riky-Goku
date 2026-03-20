import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { useQueryFunction } from "../hooks/useQueryFunction";
import type { IApiResponse } from "../types/IGenericApiResponse";
import type { IRiky } from "../types/IRiky";
import { CardGridSkeleton } from "../components/CardGridSkeleton";
import { CardView } from "../components/CardView";
import { rickAndMortyApi } from "../api/axiosInstances";
import { Pagination } from "../components/Pagination";
import ErrorDisplay from "../components/ErrorDisplay";
export default function RickAndMorty() {

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
/*
  const { data, isError, isLoading, error, isPlaceholderData } = useQuery({

    queryKey: ["character", page + 1],
    queryFn: () => {
      const res = genericFetcher<IApiResponse<IRiky>>(rickAndMortyApi, `?page=${page + 1}`)
      return res;
    },
    placeholderData: keepPreviousData
  })*/
 const { 
   data, 
   isError, 
   isPending, 
   error, 
   isPlaceholderData 
 } = useQueryFunction<IApiResponse<IRiky>>({
   queryKeyName: "dragonball",
   page:page,
   endPointUrl: "", // Puedes usar 'characters' u otra url base aquí
   apiAxiosInstance: rickAndMortyApi
 });

    const nextPage=()=>(setPage(prev=>prev+1));
    const prevPage =()=>(setPage(prev=>Math.max(prev - 1, 0)));
  if (isError) {
       console.log(error?.name)
    return (
    <div> 
      

        <ErrorDisplay/>
      
    </div>)
  }

  if (isPending) {

    return (
      <CardGridSkeleton />
    )
  }
  console.log("loq ue nos da", data)
  const hasNextPage=!!data?.info?.next;
  const characterFilters = data?.results?.filter((e) => (
    e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  ) || [];
  console.log("lo filtrado", characterFilters)

  return (
    // Fondo principal: #a9f3fd (el más claro)
    <div className="min-h-screen bg-[#a9f3fd] p-4 md:p-10">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Encabezado: Borde #35c9dd y texto #02afc5 */}
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border-b-8 border-[#35c9dd]">
          <h1 className="text-[#02afc5] text-4xl font-black mb-6 uppercase tracking-tighter">
            Multiverso <span className="text-[#4cb5c3]">Cian</span>
          </h1>

          <div className="bg-[#87d1db]/10 p-2 rounded-2xl border border-[#87d1db]">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Busca tu variante..."
            />
          </div>
        </div>
        <Pagination
          page={page}
          nextPage={nextPage}
          prevPage={prevPage}
          isPlaceData={isPlaceholderData}
          isNextDisabled={!hasNextPage || isPlaceholderData}
        />
        {/* Grid de Personajes: Usando grid-cols-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {
            search && characterFilters?.length === 0 ?
              <div className="col-span-full text-center py-20 bg-white/40 border-4 border-dashed border-[#35c9dd] rounded-[3rem] text-[#02afc5] font-black text-2xl">
                NO SE ENCONTRÓ NINGUNA VARIANTE EN ESTA DIMENSIÓN
              </div> :
              // CORRECCIÓN: Mapeamos 'characterFilters' para que la búsqueda sea dinámica
              (characterFilters.map((cha) => (
                <div
                  key={cha.id}
                  className="bg-white p-3 rounded-[1.5rem] border-2 border-[#87d1db] shadow-md hover:border-[#02afc5] transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardView
                    id={cha.id}
                    ruta={"rickandmorty"}
                    title={cha.name}
                    subtitle={cha.name}
                    badge={cha.status}
                    image={cha.image}
                    //description={`Ubicacón: ${cha?.location?.name||"desconocida"}`}
                    description={cha.gender}
                    footerInfo={(new Date(cha.created).toDateString())}
                  />
                  {/* Detalle decorativo con el azul #4cb5c3 */}
                  <div className="mt-4 h-1.5 w-16 bg-[#4cb5c3] rounded-full mx-auto opacity-50" />

                </div>
              )))
          }
        </div>
      </div>
    </div>
  );
}