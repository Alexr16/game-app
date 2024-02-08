import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}



const useGenrers = () => ({data: genres, loading: false, error: null})

export default useGenrers;