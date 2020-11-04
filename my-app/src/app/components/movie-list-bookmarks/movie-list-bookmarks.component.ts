import { Component, OnInit } from '@angular/core';
import { getMovieListFromLocalStorage } from 'src/store/actions/movies.actions';
import { Store } from '@ngrx/store';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MoviesState } from 'src/store/states/movies.state';

@Component({
  selector: 'app-movie-list-bookmarks',
  templateUrl: './movie-list-bookmarks.component.html',
  styleUrls: ['./movie-list-bookmarks.component.scss']
})
export class MovieListBookmarksComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private _store$: Store<MoviesState>, private router: Router) { }

  public ngOnInit(): void {
 	this.activateRoute.queryParams.subscribe((params: any) => {
		return this._store$.dispatch(getMovieListFromLocalStorage({ page: params.page ? params.page : 1 }));
	});
}
 public changePage(event: any): void {
	const navigationExtras: NavigationExtras = {
		queryParams: { page: event.pageIndex + 1 }
	};
	this.router.navigate(['/watchMovie'], navigationExtras);
}

}
