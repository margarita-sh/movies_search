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
			console.log(params);

			const movieName: string = params['nameMovie'];
			return this._store$.dispatch(getMoviesFromSearch({ query: movieName, page: params.page ? params.page : 1 }));
		});
	}

	public changePage(event: any): void {
		/* console.log(this.activateRoute.snapshot);
		const nameMovie: string = this.activateRoute.snapshot.params.nameMovie;
		let page: number = Number(this.activateRoute.snapshot.params.page);
		page = page ? page : 1
		this.router.navigate(['search/' + nameMovie + "/" + (page + 1)]); */
		const nameMovie: string = this.activateRoute.snapshot.params.nameMovie;
		this._store$.dispatch(getMoviesFromSearch({ query: nameMovie, page: event.pageIndex + 1 }));
		const navigationExtras: NavigationExtras = {
		queryParams: { page: event.pageIndex + 1 }
		};
		 this.router.navigate(['search/' + nameMovie + "/"], navigationExtras);

	}

}
