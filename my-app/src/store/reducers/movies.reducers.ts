import { createReducer, on, ActionReducer, Action } from '@ngrx/store';
import * as MoviesAction from '../actions/movies.actions';
import { MoviesState, initialState } from '../states/movies.state';

const moviesReducer: ActionReducer<MoviesState, Action> = createReducer(
	initialState,
	on(MoviesAction.setMovies, (state: MoviesState, action: MoviesAction.MoviesActionProps ): MoviesState => {
		return ({
			...state,
			movies: action.movies
		});
	}),
	on(MoviesAction.setMoviesDetails, (state: MoviesState, action: MoviesAction.MoviesActionProps ): MoviesState => {
		return ({
			...state,
			movie: action.movie
		});
	}),
	on(MoviesAction.setPopularMovies, (state: MoviesState, action: MoviesAction.MoviesActionProps ): MoviesState => {
		return ({
			...state,
			moviesPopular: action.moviesPopular
		});
	})
);

export function StateReducerMovies(state: MoviesState | undefined, action: Action): MoviesState {
	return moviesReducer(state, action);
}
