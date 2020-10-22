import { Component, OnInit } from '@angular/core';
import { Movie } from '../search/model/search.model';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectMovies } from 'src/store/selectors/movies.selectors';
import { MoviesState } from 'src/store/states/movies.state';
import { getTopMovies, getMoviesFromSearch, getMoviesByGenres } from 'src/store/actions/movies.actions';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
	public movies$: Observable<Movie[]> = this._store$.pipe(select(selectMovies));
	constructor(
		public _store$: Store<MoviesState>,
		private activateRoute: ActivatedRoute
	) { }

	public ngOnInit(): void {
		this.activateRoute.queryParams.subscribe((queryParams: ActivatedRoute) => {
			const movieName: string = queryParams['nameMovie'];
			console.log('movieName', movieName);
			const genreId: number = queryParams['genreId'];
			console.log('genreId', genreId);
			if (movieName !== undefined) {
				console.log('1');
				return this._store$.dispatch(getMoviesFromSearch({ query: movieName }));
			} else if (genreId !== undefined) {
				console.log('2');
				return this._store$.dispatch(getMoviesByGenres({ id: genreId }));
			} else {
				console.log('3');
				return this._store$.dispatch(getTopMovies({}));
			}
		});

	}

}
