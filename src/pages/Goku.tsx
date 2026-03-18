import { useQuery } from "@tanstack/react-query";
import { genericFetcher } from "../api";
import type { IGoku } from "../types/IGoku";

export default function Goku() {
   const url = import.meta.env.VITE_API_URL_GOKU;
    const {data,isError,isPending,error}=useQuery(
        {
        queryKey:["characters"],
        queryFn: ()=>{
            const res= genericFetcher<IGoku>(url)
            return   res;
        }
        
    
    
        });
    if(isPending){
     return <div> Cargando...</div>
    }
    if(isError){
        return <div> Error:{error.message}</div>
    }

  return (
    
      
    <div>
        {JSON.stringify(data)}
    </div>
  );
}
