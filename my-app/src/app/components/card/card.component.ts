import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Movie } from '../search/model/search.model';
import { MoviesState } from 'src/store/states/movies.state';
import { Store } from '@ngrx/store';
import { addMoviesToLocalStorage } from 'src/store/actions/movies.actions';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	@Input() public movie: Movie;
/* 	public movieList: Movie[] = []; */

	constructor(private _store$: Store<MoviesState>) { }

	public ngOnInit(): void {
	}

	public addToWatchList(movie: Movie): void {
		const movieList: Movie[] = [movie];
		this._store$.dispatch(addMoviesToLocalStorage({movies: movieList }));
	}


}
