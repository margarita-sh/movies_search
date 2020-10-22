import { featureKeyGenres, GenresState } from './states/genres.state';
import { ActionReducerMap } from '@ngrx/store';
import { StateReducerGenres } from './reducers/genres.reducer';
import { MoviesState, featureKeyMovies } from './states/movies.state';
import { StateReducerMovies } from './reducers/movies.reducers';

export interface IAppState {
	[featureKeyGenres]: GenresState;
	[featureKeyMovies]: MoviesState;
}

export const reducer: ActionReducerMap<IAppState> = {
	[featureKeyGenres]: StateReducerGenres,
	[featureKeyMovies]: StateReducerMovies
};
