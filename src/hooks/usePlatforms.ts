import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from 'ms';

const apiClient = new APIClient<Platform>('/platforms/lists/parents')
export interface Platform {
    id: number;
    name: string
}

const usePaltforms = () => useQuery(
    {
         queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'), //24h
        // initialData: { count: platforms.length, results: platforms}
    }
)

export default usePaltforms;