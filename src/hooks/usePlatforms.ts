import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>('platforms/lists/parents')
export interface Platform {
    id: number;
    name: string
}

const usePaltforms = () => useQuery(
    {
         queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: 24 ^60 * 60* 1000, //24h
        // initialData: { count: platforms.length, results: platforms}
    }
)

export default usePaltforms;