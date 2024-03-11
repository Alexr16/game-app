import axios from 'axios';

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9ed0a366521b4d5e9f8474a5000f90a4'
    }
})