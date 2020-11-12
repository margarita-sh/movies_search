import { Component, OnInit, Input, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { Movie } from '../search/model/search.model';
import { MoviesState } from 'src/store/states/movies.state';
import { Store } from '@ngrx/store';
import { addMoviesToLocalStorage, getQuantityMovies, removeMovieFromLS } from 'src/store/actions/movies.actions';
import { MovieService } from 'src/app/service/movie.service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	@Input() public movie: Movie;
	public checked: boolean = false;

	constructor(private _store$: Store<MoviesState>, private movieService: MovieService) { }

	// tslint:disable-next-line: no-empty
	public ngOnInit(): void {
		this.checked = this.movieService.isMovieExistInLS(this.movie);
	}

	public addToWatchList(movieLS: Movie): void {
		if (this.checked) {
			this._store$.dispatch(removeMovieFromLS({ movieLS: this.movie }));
		} else {
			this._store$.dispatch(addMoviesToLocalStorage({ movies: [movieLS] }));
		}
		this.checked = !this.checked;
	}

}
