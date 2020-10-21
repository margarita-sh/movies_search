import { createAction, ActionCreator, props, Action } from '@ngrx/store';
import { Genres } from 'src/app/genres/model/genres.model';
import { NotAllowedCheck, TypedAction } from '@ngrx/store/src/models';

type TypeActionCreator<S extends string, O extends object> = ActionCreator<
	S, (props: O & NotAllowedCheck<O>) => & TypedAction<S>
>;

export interface GenresActionProps extends Action {
	genres: Genres[];
}

	export const getGenres: TypeActionCreator<string, {} > = createAction('[Get genres from API]', );

	export const setGenres: TypeActionCreator<string, {genres: Genres[]} > = createAction(
		'[Set genres from API]', props<{genres: Genres[]}>());