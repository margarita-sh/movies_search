import { Component, OnInit } from '@angular/core';
import { Movie } from '../search/model/search.model';
import { Observable } from 'rxjs';
import { MoviesEffects } from 'src/store/effects/movies.effects';
import { Store, select } from '@ngrx/store';
import { selectMoviesFromLocalStorage } from 'src/store/selectors/movies.selectors';
import { getMovieListFromLocalStorage } from 'src/store/actions/movies.actions';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watchList.component.html',
  styleUrls: ['./watchList.component.scss']
})
export class WatchListComponent implements OnInit {
	public moviesFromLS$: Observable<Movie[]> = this._store$.pipe(select(selectMoviesFromLocalStorage));
  constructor(private _store$: Store<MoviesEffects>) { }

  public  ngOnInit(): void {
	  this._store$.dispatch(getMovieListFromLocalStorage({}));
  }
}
