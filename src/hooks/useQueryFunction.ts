import { useQuery, keepPreviousData } from "@tanstack/react-query"
import { genericFetcher } from "../api";
import type { AxiosInstance } from "axios";


interface PropsQuery {
  queryKeyName: string;
  page?: number;
  endPointUrl: string;
  apiAxiosInstance: AxiosInstance;
}


export const useQueryFunction = <T>({
  queryKeyName,
  page = 0,
  endPointUrl,
  apiAxiosInstance
}: PropsQuery) => { 

  const { data, isError, isPending, error, isPlaceholderData } = useQuery({
    queryKey: [queryKeyName, page + 1],
    queryFn: async () => {

      const res = await genericFetcher<T>(apiAxiosInstance, `/${endPointUrl}?page=${page + 1}`);
      return res;
    },
    placeholderData: keepPreviousData,
    
  });

  return { data, isError, isPending, error, isPlaceholderData };
}
