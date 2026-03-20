import { useState, useEffect } from "react"

import type { AxiosInstance } from "axios";


export const useFetch = <T,>(instance:AxiosInstance,endpoint:string)=> {
    const [data, setData] = useState<T>();
    const [error, setError] = useState();
    const [isLoding, setIsLoading] = useState(false);

    useEffect(() => {
        try {
            setIsLoading(true)
            const res = instance.get(endpoint)
            res.then((data) => setData(data.data as T))
                .catch(err => setError(err))

        } finally {
            setIsLoading(false)
            
        }

    }, [endpoint])


return { data, error, isLoding }
}