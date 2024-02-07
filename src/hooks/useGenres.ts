import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}



const useGenrers = () => useData<Genre>("/genres")

export default useGenrers;