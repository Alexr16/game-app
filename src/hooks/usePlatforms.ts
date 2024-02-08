import useData from "./useData";

export interface Platform {
    id: number;
    name: string
}

const usePaltforms = () => useData<Platform>('/platforms/lists/parents');

export default usePaltforms;