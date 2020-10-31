import { Component, OnInit } from '@angular/core';
import { Movie } from '../search/model/search.model';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectMovies, selectTotalMovies } from 'src/store/selectors/movies.selectors';
import { MoviesState } from 'src/store/states/movies.state';
import { getTopMovies, getMoviesFromSearch, getMoviesByGenres } from 'src/store/actions/movies.actions';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
	public movies$: Observable<Movie[]> = this._store$.pipe(select(selectMovies));
	public totalMovies$: Observable<number> = this._store$.pipe(select(selectTotalMovies));
	public movieDetails: boolean = false;
	public page: number = 1;
	constructor(
		public _store$: Store<MoviesState>,
		private activateRoute: ActivatedRoute,
		private router: Router
	) { }

	public ngOnInit(): void {
		this.activateRoute.params.subscribe((params: ActivatedRoute) => {
			console.log(params);
			const movieId: number = params['movieId'];
			if (movieId !== undefined) {
				this.movieDetails = true;
			}
			const movieName: string = params['nameMovie'];
			const genreId: number = params['id'];
			if (movieName !== undefined) {
				return this._store$.dispatch(getMoviesFromSearch({ query: movieName }));
			} else if (genreId !== undefined) {
				return this._store$.dispatch(getMoviesByGenres({ id: genreId }));
			} else {
				return this._store$.dispatch(getTopMovies({ page: this.page }));
			}
		});
	}
	public changePage(event: any): void {
		this.page = event.pageIndex;
		this._store$.dispatch(getTopMovies({ page: this.page + 1 }));
		const navigationExtras: NavigationExtras = {
			queryParams: { page: this.page + 1 }
		};
		this.router.navigate([''], navigationExtras);
	}

}
