import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
export class MovieListComponent{

	@Output() public pagination: EventEmitter<number> = new EventEmitter<number>();
 	public movies$: Observable<Movie[]> = this._store$.pipe(select(selectMovies));
	public totalMovies$: Observable<number> = this._store$.pipe(select(selectTotalMovies));
	constructor(
 		public _store$: Store<MoviesState>,
	) { }

 	public changePage(event: any): void {
		this.pagination.emit(event);
	}
}
