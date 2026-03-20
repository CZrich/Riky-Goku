import type { AxiosInstance } from "axios";


export const genericFetcher = async <T>(instance:AxiosInstance ,endpoint: string =""): Promise<T> => {
    const res = await instance.get<T>(endpoint);
    return res.data;
}