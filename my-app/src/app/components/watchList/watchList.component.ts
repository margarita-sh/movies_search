import { Component, OnInit } from '@angular/core';
import { MoviesEffects } from 'src/store/effects/movies.effects';
import { Store} from '@ngrx/store';


@Component({
  selector: 'app-watch-list',
  templateUrl: './watchList.component.html',
  styleUrls: ['./watchList.component.scss']
})
export class WatchListComponent implements OnInit {
//	public moviesFromLS$: Observable<Movie[]> = this._store$.pipe(select(selectMoviesFromLocalStorage));
  constructor(private _store$: Store<MoviesEffects>) { }

  public  ngOnInit(): void {
	 // this._store$.dispatch(getMovieListFromLocalStorage({}));
  }
}
