import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MoviesEffects } from 'src/store/effects/movies.effects';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../search/model/search.model';
import { selectMovies, selectTotalMovies } from 'src/store/selectors/movies.selectors';
import { getTopMovies } from 'src/store/actions/movies.actions';

@Component({
	selector: 'app-movie-list-top',
	templateUrl: './movie-list-top.component.html',
	styleUrls: ['./movie-list-top.component.scss']
})
export class MovieListTopComponent implements OnInit {

	constructor(private activateRoute: ActivatedRoute, private _store$: Store<MoviesEffects>, private router: Router) { }

	public ngOnInit(): void {
		this.activateRoute.queryParams.subscribe((params: any) => {
			return this._store$.dispatch(getTopMovies({ page: params.page ? params.page : 1 }));
		});

	}
	public changePage(event: any): void {
		const navigationExtras: NavigationExtras = {
			queryParams: { page: event.pageIndex + 1 }
		};
		this.router.navigate([''], navigationExtras);
	}
}
