import axios from 'axios';

const API_KEY = '032ee4ce5746e4646f830dc1f2b2d788';
const BASE_URL = 'https://api.themoviedb.org/3/' ;
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }

    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }
}