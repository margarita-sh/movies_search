import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Movie } from '../search/model/search.model';
import { Store, select } from '@ngrx/store';
import { Observable} from 'rxjs';
import { selectMovies, selectTotalMovies } from 'src/store/selectors/movies.selectors';
import { MoviesState } from 'src/store/states/movies.state';
import { MovieService } from 'src/app/service/movie.service';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

	@Output() public pagination: EventEmitter<number> = new EventEmitter<number>();
	@Input() public customMoviesSelector: any;
	@Input() public customTotalMoviesSelector: any;
	public movies$: Observable<Movie[]> = this._store$.pipe(select(selectMovies));
	public totalMovies$: Observable<number> = this._store$.pipe(select(selectTotalMovies));
	constructor(
		public _store$: Store<MoviesState>,
		public movieService: MovieService
	) { }
	public ngOnInit(): void {
		if (this.customMoviesSelector && this.customTotalMoviesSelector) {
			this.movies$ = this._store$.pipe(select(this.customMoviesSelector));
			this.totalMovies$ = this._store$.pipe(select(this.customTotalMoviesSelector));
		}
	}
	public changePage(event: any): void {
		this.pagination.emit(event);
	}
}
