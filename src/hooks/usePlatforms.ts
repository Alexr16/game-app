import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";

export interface Platform {
    id: number;
    name: string
}

const usePaltforms = () => useQuery(
    {
         queryKey: ['platforms'],
        queryFn: () => 
        apiClient.get<FetchResponse<Platform>>('/platforms/list/parents').then(res => res.data),
        staleTime: 24 ^60 * 60* 1000, //24h
        // initialData: { count: platforms.length, results: platforms}
    }
)

export default usePaltforms;