import { createReducer, on, ActionReducer, Action } from '@ngrx/store';
import { GenresState, initialState } from '../states/genres.state';
import * as GenresAction from '../actions/genres.actions';

const genresReducer: ActionReducer<GenresState, Action> = createReducer(
	initialState,
	on(GenresAction.setGenres, (state: GenresState, action: GenresAction.GenresActionProps ): GenresState => {
		return ({
			...state,
			genres: action.genres
		});
	})
);

export function StateReducerGenres(state: GenresState, action: Action): GenresState {
	return genresReducer(state, action);
}
