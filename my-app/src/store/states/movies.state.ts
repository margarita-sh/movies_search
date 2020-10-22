import { Movie } from 'src/app/search/model/search.model';

export interface MoviesState {
	movies: Movie[];
}

export const featureKeyMovies: 'MOVIES' = 'MOVIES';

export const initialState: MoviesState = {
	movies: [],
};
