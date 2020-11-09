import { Movie, ResultMovies } from 'src/app/components/search/model/search.model';
import { DetailsModel} from 'src/app/components/details/model/details.model';
import { Cast } from 'src/app/actors/model/actors.model';

export interface MoviesState {
 	movies: Movie[];
	result: ResultMovies;
	movie: DetailsModel;
	moviesPopular: Movie[];
	quantityMovies: number;
	cast: Cast[];
}

export const featureKeyMovies: 'MOVIES' = 'MOVIES';

export const initialState: MoviesState = {
	movies: [],
	movie: null,
	moviesPopular: [],
	result: null,
	quantityMovies: 0,
	cast: [],
};
