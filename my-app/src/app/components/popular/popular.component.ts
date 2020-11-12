import { Component, OnInit } from '@angular/core';
import { Movie } from '../search/model/search.model';
import { MovieService } from '../../service/movie.service';
import { Store, select } from '@ngrx/store';
import { MoviesState } from 'src/store/states/movies.state';
import { getPopularMovies } from 'src/store/actions/movies.actions';
import { selectMoviesPopular } from 'src/store/selectors/movies.selectors';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-popular',
	templateUrl: './popular.component.html',
	styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
	public moviesPopular$: Observable<Movie[]> = this._store$.pipe(select(selectMoviesPopular));
	public responsiveOptions: any = [
		{
			breakpoint: '1400px',
			numVisible: 5,
			numScroll: 3
		},
		{
			breakpoint: '1024px',
			numVisible: 4,
			numScroll: 3
		},
		{
			breakpoint: '768px',
			numVisible: 3,
			numScroll: 1
		},
		{
			breakpoint: '375px',
			numVisible: 1,
			numScroll: 3
		}
	];
	constructor(public _store$: Store<MoviesState>) { }
	public ngOnInit(): void {
		this._store$.dispatch(getPopularMovies({}));
	}

}
