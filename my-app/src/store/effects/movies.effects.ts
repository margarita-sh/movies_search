import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { TypedAction } from '@ngrx/store/src/models';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { getMoviesByGenres, MoviesActionProps, setMovies, getMoviesFromSearch, getTopMovies, getMoviesDetails, setMoviesDetails } from '../actions/movies.actions';
import { mergeMap, map } from 'rxjs/operators';
import { Movie } from 'src/app/search/model/search.model';
import { MovieService } from 'src/app/service/movie.service';
import { DetailsModel } from 'src/app/details/model/details.model';

@Injectable()
export class MoviesEffects {
	public getMoviesByGenresEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getMoviesByGenres),
			mergeMap((action: MoviesActionProps) => this.movieService.searchFilmByGenres(action.id)
				.pipe(
					map((movies: Movie[]) => {
						return setMovies({ movies });
					})
				)
			)
		)
	);

	public getMoviesFromSearchEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getMoviesFromSearch),
			mergeMap((action: MoviesActionProps) => this.movieService.searchFilm(action.query)
				.pipe(
					map((movies: Movie[]) => {
						return setMovies({ movies });
					})
				)
			)
		)
	);

	public getTopMoviesEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getTopMovies),
			mergeMap(() => this.movieService.getTopMovie()
				.pipe(
					map((movies: Movie[]) => {
						return setMovies({ movies });
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

	constructor(
		private actions$: Actions,
		private movieService: MovieService,
	) { }
}
