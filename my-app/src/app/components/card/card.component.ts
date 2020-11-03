import { Component, OnInit, Input, OnDestroy, ComponentFactoryResolver } from '@angular/core';
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
	public noChecked: boolean = true;

	constructor(private _store$: Store<MoviesState>) { }

	// tslint:disable-next-line: no-empty
	public ngOnInit(): void {
	}

	public addToWatchList(movie: Movie): void {
		this.noChecked = !this.noChecked;
		this._store$.dispatch(addMoviesToLocalStorage({movies: [movie] }));
	}

}
