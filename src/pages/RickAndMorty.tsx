import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { genericFetcher } from "../api";
import type { IApiResponse } from "../types/IGenericApiResponse";
import type { IRiky } from "../types/IRiky";
import { CardGridSkeleton } from "../components/CardGridSkeleton";
import { CardView } from "../components/CardView";
import { rickAndMortyApi } from "../api/axiosInstances";
export default function RickAndMorty() {

  const [search, setSearch] = useState("");
  const { data, isError, isLoading, error } = useQuery({

    queryKey: ["character"],
    queryFn: () => {
      const res = genericFetcher<IApiResponse<IRiky>>(rickAndMortyApi)
      return res;
    }
  })


  if (isError) {

    return <div> Ocurrio un error..{error.message}.</div>
  }

  if (isLoading) {

    return (
      <CardGridSkeleton />
    )
  }
  console.log("loq ue nos da",data?.results)
  const characterFilters = data?.results?.filter((e) => ( 
    e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  
  ) || [];
console.log("lo filtrado",characterFilters)

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