import { useQuery } from "@tanstack/react-query";
import { genericFetcher } from "../api";
import type { IGoku } from "../types/IGoku";
import type { IApiResponse } from "../types/IGenericApiResponse";
import { CardView } from "../components/CardView";
import { SearchBar } from "../components/SearchBar";
import { useState } from "react";
import { CardGridSkeleton } from "../components/CardGridSkeleton";

export default function Goku() {
    const url = import.meta.env.VITE_API_URL_GOKU;
    const [search, setSearch] = useState("");

    const { data, isError, isPending, error } = useQuery(
        {
            queryKey: ["characters"],
            queryFn: () => {
                const res = genericFetcher<IApiResponse<IGoku>>(url)
                return res;
            }



        });

    const handleClear = () => {
        setSearch("")
    }

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
        <div>

            <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Busca un guerrero..."

            />

            {search !== "" && (
                <button
                    onClick={handleClear}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-xl font-bold transition-all"
                >
                    Ver todos
                </button>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6">

                {
                    filteredCharacters?.map((goku) => (
                        <CardView
                            key={goku.id}
                            title={goku.name}
                            subtitle={goku.race}
                            image={goku.image}
                            badge={goku.affiliation}
                            description={goku.description}
                            footerInfo={`Max Ki: ${goku.maxki}`}
                        />
                    ))
                }
            </div>
        </div>
    );
}
