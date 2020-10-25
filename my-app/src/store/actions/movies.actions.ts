import { createAction, ActionCreator, props, Action } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { Genres } from 'src/app/genres/model/genres.model';
import { Movie } from 'src/app/search/model/search.model';
import { DetailsModel } from 'src/app/details/model/details.model';

type TypeActionCreator<S extends string, O extends object> = ActionCreator<
	S, (props: O) => & TypedAction<S>
>;

export interface MoviesActionProps extends Action {
	movies: Movie[];
	id: Genres['id'];
	query: string;
	// idMovie: Movie['id'];
	idMovie: number;
	movie: DetailsModel;
}

export const getMoviesByGenres: TypeActionCreator<string, { id: Genres['id'] }> = createAction(
	'[Get movies by genres API]', props<{ id: Genres['id'] }>());

export const setMovies: TypeActionCreator<string, { movies: Movie[] }> = createAction(
	'[Set movies by genres API]', props<{ movies: Movie[] }>());

export const getMoviesFromSearch: TypeActionCreator<string, { query: string }> = createAction(
	'[Get movies from search]', props<{ query: string }>());

export const getTopMovies: TypeActionCreator<string, {}> = createAction(
	'[Get TOP movies from API]');

export const getMoviesDetails: TypeActionCreator<string, { idMovie: number }> = createAction(
	'[Get MovieDetails from API]', props<{ idMovie: number }>());

export const setMoviesDetails: TypeActionCreator<string, {movie: DetailsModel}> = createAction(
	'[Set MovieDetails from API]', props<{ movie: DetailsModel }>());
