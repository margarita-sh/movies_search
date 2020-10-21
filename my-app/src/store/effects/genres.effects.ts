import { ofType, createEffect, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/service/movie.service';
import { getGenres, setGenres } from '../actions/genres.actions';
import { Injectable } from '@angular/core';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable()
export class GenresEffects {
	public setGenresEffect$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getGenres),
			mergeMap(() => this.movieService.outputGenres()
				.pipe(
					map((genres: any) => {
						console.log('effect', genres);
						return setGenres({ genres });
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
