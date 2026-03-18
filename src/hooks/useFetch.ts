import { useEffect, useState } from "react";

interface IFetchTypeData<T> {
    data: T | null;
    isLoading: boolean;
    error: Error | null;


}

const useFetch = <T> (url: string): IFetchTypeData<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error("error fetching data");
                }
                const result = await res.json();

                setData(result);
                setError(null);
            }
            catch (err) {
                if (err instanceof Error && err.name !== 'AbortError') {
            setError(err);
        }
            }
            finally {
                setIsLoading(false);
            }

        }
        fetchData();

    }, [url])


    return { data, isLoading, error };

}
export default useFetch;