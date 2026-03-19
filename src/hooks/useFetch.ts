import { useState,useEffect } from "react"
export  const useFetch=(url)=>{
    const [data,setData]=useState();
    const [error,setError]=useState();
    const [isLoding,setIsLoading]=useState(false);

    useEffect(()=>{
        

        
    },[url])


 return {data,error,isLoding}
}