import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MoviesState } from 'src/store/states/movies.state';
import { Store, select } from '@ngrx/store';
import { getMoviesFromSearch } from 'src/store/actions/movies.actions';
import { Observable } from 'rxjs';
import { Movie } from '../search/model/search.model';
import { selectMovies, selectTotalMovies } from 'src/store/selectors/movies.selectors';

@Component({
	selector: 'app-movie-list-search',
	templateUrl: './movie-list-search.component.html',
	styleUrls: ['./movie-list-search.component.scss']
})
export class MovieListSearchComponent implements OnInit {

	constructor(private activateRoute: ActivatedRoute, private _store$: Store<MoviesState>, private router: Router) { }

	public ngOnInit(): void {
		this.activateRoute.params.subscribe((params: any) => {
			const movieName: string = params['nameMovie'];
			this.activateRoute.queryParams.subscribe((item: any) => {
				return this._store$.dispatch(getMoviesFromSearch({ query: movieName, page: item.page ? item.page : 1 }));
			});

		});
	}

	public changePage(event: any): void {
		this.activateRoute.params.subscribe((item: any) => {
			const navigationExtras: NavigationExtras = {
				queryParams: { page: event.pageIndex + 1 }
			};
			this.router.navigate(['/search', item.nameMovie], navigationExtras);
		});

	}
}
