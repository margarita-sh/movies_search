import { createAction, ActionCreator, props, Action } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { Genres } from 'src/app/components/genres/model/genres.model';
import { Movie, ResultMovies } from 'src/app/components/search/model/search.model';
import { DetailsModel } from 'src/app/components/details/model/details.model';
import { Actors, Cast } from 'src/app/actors/model/actors.model';

type TypeActionCreator<S extends string, O extends object> = ActionCreator<
	S, (props: O) => & TypedAction<S>
>;

export interface MoviesActionProps extends Action {
	movies: Movie[];
 	id: Genres['id'];
/* 	idActors: Actors['id']; */
	cast: Cast[];
	query: string;
	idMovie: number;
	movie: DetailsModel;
	moviesPopular: Movie[];
	page: number;
	result: ResultMovies;
	quantityMovies: number;

}

export const getMoviesByGenres: TypeActionCreator<string, { id: Genres['id'], page: number }> = createAction(
	'[Get movies by genres API]', props<{ id: Genres['id'], page: number }>());

export const setMovies: TypeActionCreator<string, { result: ResultMovies }> = createAction(
	'[Set movies by genres API]', props<{ result: ResultMovies }>());

export const getMoviesFromSearch: TypeActionCreator<string, { query: string, page: number; }> = createAction(
	'[Get movies from search]', props<{ query: string, page: number }>());

export const getTopMovies: TypeActionCreator<string, { page: number }> = createAction(
	'[Get TOP movies from API]', props<{ page: number }>());

export const getMoviesDetails: TypeActionCreator<string, { idMovie: number }> = createAction(
	'[Get MovieDetails from API]', props<{ idMovie: number }>());

export const setMoviesDetails: TypeActionCreator<string, { movie: DetailsModel }> = createAction(
	'[Set MovieDetails from API]', props<{ movie: DetailsModel }>());

export const getPopularMovies: TypeActionCreator<string, {}> = createAction(
	'[Get Popular Movies from API]');

export const setPopularMovies: TypeActionCreator<string, { moviesPopular: Movie[] }> = createAction(
	'[Set Popular Movie from API]', props<{ moviesPopular: Movie[] }>());

export const addMoviesToLocalStorage: TypeActionCreator<string, { movies: Movie[] }> = createAction(
	'[Add MoviesList to LocalStorage]', props<{ movies: Movie[] }>());

export const statusMoviesList: TypeActionCreator<string, {}> = createAction(
	'[Status MoviesList]');

export const getMovieListFromLocalStorage: TypeActionCreator<string, { page: number }> = createAction(
	'[Get movies from LS]', props<{ page: number }>());

export const getQuantityMovies: TypeActionCreator<string, {}> = createAction(
	'[Get quantity Movies]');

export const quantityMoviesForBadge: TypeActionCreator<string, { quantityMovies: number }> = createAction(
	'[Set quantity Movies]', props<{ quantityMovies: number }>());

export const getActors: TypeActionCreator<string, { idMovie: number }> = createAction(
	'[Get actors by API]', props<{ idMovie: number }>());

 export const setActors: TypeActionCreator<string, {cast: Cast[]}> = createAction(
	'[Set actors by API]', props<{ cast: Cast[] }>());
