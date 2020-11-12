import { Movie, ResultMovies } from 'src/app/components/search/model/search.model';
import { DetailsModel} from 'src/app/components/details/model/details.model';
import { Cast } from 'src/app/components/actors/model/actors.model';
import { ActorDetails } from 'src/app/components/actor-details/model/actor-details.model';

export interface MoviesState {
 	movies: Movie[];
	result: ResultMovies;
	movie: DetailsModel;
	moviesPopular: Movie[];
	moviesFromLS: ResultMovies;
	/* quantityMovies: number; */
	cast: Cast[];
	actor: ActorDetails;
}

export const featureKeyMovies: 'MOVIES' = 'MOVIES';

export const initialState: MoviesState = {
	movies: [],
	movie: null,
	moviesPopular: [],
	result: null,
	/* quantityMovies: 0, */
	cast: [],
	actor: null,
	moviesFromLS: null,
};
