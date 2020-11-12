import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TypedAction } from '@ngrx/store/src/models';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { getMoviesByGenres, MoviesActionProps, setMovies, getMoviesFromSearch, getTopMovies, getMoviesDetails, setMoviesDetails, getPopularMovies, setPopularMovies, statusMoviesList, addMoviesToLocalStorage, getMovieListFromLocalStorage, quantityMoviesForBadge, getQuantityMovies, getActors, setActors, getDetailsActor, setDetailsActor, removeMovieFromLS, setMoviesInLS } from '../actions/movies.actions';
import { mergeMap, map } from 'rxjs/operators';
import { Movie, ResultMovies } from 'src/app/components/search/model/search.model';
import { MovieService } from 'src/app/service/movie.service';
import { DetailsModel } from 'src/app/components/details/model/details.model';
import { Cast } from 'src/app/components/actors/model/actors.model';
import { ActorDetails } from 'src/app/components/actor-details/model/actor-details.model';

@Injectable()
export class MoviesEffects {
	public getMoviesByGenresEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getMoviesByGenres),
			mergeMap((action: MoviesActionProps) => this.movieService.searchFilmByGenres(action.id, action.page)
				.pipe(
					map((result: ResultMovies) => {
						return setMovies({ result });
					})
				)
			)
		)
	);

	public getMoviesFromSearchEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getMoviesFromSearch),
			mergeMap((action: MoviesActionProps) => this.movieService.searchFilm(action.query, action.page)
				.pipe(
					map((result: ResultMovies) => {
						return setMovies({ result });
					})
				)
			)
		)
	);

	public getTopMoviesEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getTopMovies),
			mergeMap((action: MoviesActionProps) => this.movieService.getTopMovie(action.page)
				.pipe(
					map((result: ResultMovies) => {
						return setMovies({ result });
					})
				)
			)
		)
	);

	public getMoviesDetailsEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getMoviesDetails),
			mergeMap((action: MoviesActionProps) => this.movieService.getDetails(action.idMovie)
				.pipe(
					map((movie: DetailsModel) => {
						return setMoviesDetails({ movie });
					})
				)
			)
		)
	);

	public getPopularMoviesEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getPopularMovies),
			mergeMap(() => this.movieService.getPopularMovies()
				.pipe(
					map((moviesPopular: Movie[]) => {
						return setPopularMovies({ moviesPopular });
					})
				)
			)
		)
	);

	public addMoviesListToLSEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(addMoviesToLocalStorage),
			mergeMap((action: MoviesActionProps) => of(this.movieService.addNewMoviesToBookmarks(action.movies))
				.pipe(
					map((moviesFromLS: ResultMovies) => {
						return setMoviesInLS({ moviesFromLS });
					})
				)
			)
		)
	);

	public getMoviesListFromLSEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getMovieListFromLocalStorage),
			mergeMap((action: MoviesActionProps) => this.movieService.loadMovieListFromLocalStorage(action.page)
				.pipe(
					map((moviesFromLS: any) => {
						//return setMovies({ result });
						return setMoviesInLS({ moviesFromLS });
					})
				)
			)
		)
	);

	public removeMovieEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(removeMovieFromLS),
			mergeMap((action: MoviesActionProps) => this.movieService.removeFilmFromLS(action.movieLS)
				.pipe(
					map((moviesFromLS: ResultMovies) => {
						return setMoviesInLS({ moviesFromLS });
					})
				)
			)
		)
	);

	/* 	public removeMovieEffect$: Observable<TypedAction<string>> = createEffect(
			() => this.actions$.pipe(
				ofType(removeMovieFromLS),
				mergeMap((action: MoviesActionProps) => this.movieService.removeFilmFromLS(action.movieLS)
					.pipe(
						map((result: any) => {
							console.log('movies', result);
							return setMovies({ result });
						})
					)
				)
			)
		); */

	public quantityMoviesffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getQuantityMovies),
			mergeMap(() => this.movieService.getQuantityMovies()
				.pipe(
					map((result: any) => {
						console.log('result', result);
						const quantityMovies: number = result;
						return quantityMoviesForBadge({ quantityMovies });
					})
				)
			)
		)
	);

	public setActorsEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getActors),
			mergeMap((action: MoviesActionProps) => this.movieService.getPersonCast(action.idMovie)
				.pipe(
					map((cast: Cast[]) => {
						return setActors({ cast });
					})
				)
			)
		)
	);

	public setDetailsActorEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getDetailsActor),
			mergeMap((action: MoviesActionProps) => this.movieService.getActorDetail(action.idActor)
				.pipe(
					map((actor: ActorDetails) => {
						return setDetailsActor({ actor });
					})
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private movieService: MovieService,
	) { }
}
