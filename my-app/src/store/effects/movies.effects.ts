import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { TypedAction } from '@ngrx/store/src/models';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { getMoviesByGenres, MoviesActionProps, setMovies, getMoviesFromSearch, getTopMovies, getMoviesDetails, setMoviesDetails, getPopularMovies, setPopularMovies } from '../actions/movies.actions';
import { mergeMap, map } from 'rxjs/operators';
import { Movie, ResultMovies } from 'src/app/search/model/search.model';
import { MovieService } from 'src/app/service/movie.service';
import { DetailsModel } from 'src/app/details/model/details.model';

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

	constructor(
		private actions$: Actions,
		private movieService: MovieService,
	) { }
}
