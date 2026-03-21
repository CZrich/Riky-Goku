import { genericFetcher } from "../api"; 
import { dbzApi, rickAndMortyApi } from "../api/axiosInstances";
import type { IApiResponse } from "../types/IGenericApiResponse";
import type { IGoku } from "../types/IGoku";
import type { IRiky } from "../types/IRiky";
import type { ICardQuiz } from "../types/ICardQuiz";

export async function getCharcaterMultiverse(): Promise<ICardQuiz[]> {
  try {
    const storedRickPages = localStorage.getItem("totalPagesRick");
    const storedDbzPages = localStorage.getItem("totalPagesDbz");

    const maxRickPages = storedRickPages ? parseInt(storedRickPages) : 1;
    const maxDbzPages = storedDbzPages ? parseInt(storedDbzPages) : 1;

    const rmPage = storedRickPages ? Math.floor(Math.random() * maxRickPages) + 1 : 1;
    const dbzPage = storedDbzPages ? Math.floor(Math.random() * maxDbzPages) + 1 : 1;

    const [dbzRes, rmRes] = await Promise.all([
      genericFetcher<IApiResponse<IGoku>>(dbzApi,`?page=${dbzPage}`),
      genericFetcher<IApiResponse<IRiky>>(rickAndMortyApi,`?page=${rmPage}`)
    ]);
   const dbzPages=dbzRes.meta?.totalPages;
   
    if (dbzPages) {
      localStorage.setItem("totalPagesDbz", dbzPages.toString());
    }
    
    const rmPages = rmRes.info?.pages;
    if (rmPages) {
      localStorage.setItem("totalPagesRick", rmPages.toString());
    }

    const dbzItems = dbzRes.items?.slice(0,3)|| [];
    const rmItems = rmRes.results?.slice(0,3) || [];

 

    const dbzCards: ICardQuiz[] = dbzItems.map( (c)=>({
      id: `dbz_${c.id}`,
      src:c.image,
      name:c.name,
      isFlipped: false,
      isMatched: false,
    }))
      const rmCards: ICardQuiz[] = rmItems.map( (c)=>({
      id: `rm_${c.id}`,
      src:c.image ||"",
      name:c.name,
      isFlipped: false,
      isMatched: false,
    }))


  

    return [...dbzCards, ...rmCards];

  } catch (error) {
    console.error("Fallo crítico abriendo portales interdimensionales:", error);
   
    return []; 
  }
}
