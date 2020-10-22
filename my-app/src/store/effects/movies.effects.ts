import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypedAction } from '@ngrx/store/src/models';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { getMoviesByGenres, MoviesActionProps, setMovies, getMoviesFromSearch } from '../actions/movies.actions';
import { mergeMap, map } from 'rxjs/operators';
import { Movie } from 'src/app/search/model/search.model';
import { MovieService } from 'src/app/service/movie.service';

@Injectable()
export class MoviesEffects {
	public setMoviesByGenresEffect$: Observable<TypedAction<string>> = createEffect(
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

	public setMoviesFromSearchEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getMoviesFromSearch),
			mergeMap((action: MoviesActionProps) => this.movieService.searchFilm(action.query)
				.pipe(
					map((movies: Movie[]) => {
						console.log('moviesSEARCH', movies);
						return setMovies({ movies });
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
