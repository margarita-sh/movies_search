import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MoviesState } from 'src/store/states/movies.state';
import { Store, select } from '@ngrx/store';
import { getMoviesByGenres } from 'src/store/actions/movies.actions';
import { Movie } from '../search/model/search.model';
import { Observable } from 'rxjs';
import { selectMovies, selectTotalMovies } from 'src/store/selectors/movies.selectors';

@Component({
	selector: 'app-movie-list-genre',
	templateUrl: './movie-list-genre.component.html',
	styleUrls: ['./movie-list-genre.component.scss']
})
export class MovieListGenreComponent implements OnInit {
	public movies$: Observable<Movie[]> = this._store$.pipe(select(selectMovies));
	public totalMovies$: Observable<number> = this._store$.pipe(select(selectTotalMovies));
	constructor(private activateRoute: ActivatedRoute, private _store$: Store<MoviesState>, private router: Router) { }

	public ngOnInit(): void {
		this.activateRoute.params.subscribe((params: any) => {
			console.log(params);
			const genreId: number = params['id'];
			return this._store$.dispatch(getMoviesByGenres({ id: genreId, page: params.page ? params.page : 1 }));
		});
	}

	public changePage(event: any): void {
		/* const idMovie: number = this.activateRoute.snapshot.params.nameMovie; */
		this.activateRoute.params.subscribe((item: any) => {
			const navigationExtras: NavigationExtras = {
				queryParams: { page: event.pageIndex + 1 }
			};
			this.router.navigate(['/genre', item.id], navigationExtras);
		});
	/* 	this._store$.dispatch(getMoviesByGenres({ id: idMovie, page: event.pageIndex + 1 }));  */
		/* const navigationExtras: NavigationExtras = {
			queryParams: { page: event.pageIndex + 1 }
		};
		this.router.navigate(['genre/'], navigationExtras); */
	}

	/* 	const navigationExtras: NavigationExtras = {
			queryParams: { page: event.pageIndex + 1 }
		};
		this.router.navigate([''], navigationExtras); */



		/* this.router.navigate(
			[
			  '/servers',
			  id,
			  'edit'
			], 
			{
			  queryParams: {allowEdit: '1'},
			  fragment: 'loading'
			} */
}
