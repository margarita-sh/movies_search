import { Component, OnInit } from '@angular/core';
import { Movie } from '../search/model/search.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectMovies, selectTotalMovies } from 'src/store/selectors/movies.selectors';
import { MoviesState } from 'src/store/states/movies.state';
import { getTopMovies, getMoviesFromSearch, getMoviesByGenres, getMoviesDetails } from 'src/store/actions/movies.actions';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
	public movies$: Observable<Movie[]> = this._store$.pipe(select(selectMovies));
	public totalMovies$: Observable<number> = this._store$.pipe(select(selectTotalMovies));
	public movieDetails: boolean = false;
	constructor(
		public _store$: Store<MoviesState>,
		private activateRoute: ActivatedRoute,
		private router: Router
	) { }

	public ngOnInit(): void {
		this.activateRoute.queryParams.subscribe((queryParams: ActivatedRoute) => {
			const movieId: number = queryParams['movieId'];
			if (movieId !== undefined) {
				this.movieDetails = true;
			}
			const movieName: string = queryParams['nameMovie'];
			const genreId: number = queryParams['genreId'];
			if (movieName !== undefined) {
				return this._store$.dispatch(getMoviesFromSearch({ query: movieName }));
			} else if (genreId !== undefined) {
				return this._store$.dispatch(getMoviesByGenres({ id: genreId }));
			} else {
				console.log('component dispatch');
				return this._store$.dispatch(getTopMovies({ page: 1 }));
			}
		});
	}

	/* public changePage(event): void {
		this.router.navigate([''], { page: event.pageIndex + 1});
	} */

}
