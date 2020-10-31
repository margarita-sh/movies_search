import { Movie, ResultMovies } from 'src/app/search/model/search.model';
import { DetailsModel} from 'src/app/details/model/details.model';

export interface MoviesState {
 	movies: Movie[];
	result: ResultMovies;
	movie: DetailsModel;
	moviesPopular: Movie[];
}

export const featureKeyMovies: 'MOVIES' = 'MOVIES';

export const initialState: MoviesState = {
	movies: [],
	movie: null,
	moviesPopular: [],
	result: null,
};
