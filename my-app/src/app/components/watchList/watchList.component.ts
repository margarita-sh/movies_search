import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { quantityMovies } from 'src/store/selectors/movies.selectors';
import { MoviesState } from 'src/store/states/movies.state';
import { getQuantityMovies, getMovieListFromLocalStorage } from 'src/store/actions/movies.actions';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watchList.component.html',
  styleUrls: ['./watchList.component.scss']
})
export class WatchListComponent implements OnInit {

  public quantityMovies$: Observable<number> = this._store$.pipe(select(quantityMovies));
  constructor(private _store$: Store<MoviesState>) { }

  // tslint:disable-next-line: no-empty
  public  ngOnInit(): void {
 	  this._store$.dispatch(getMovieListFromLocalStorage({page: 1}));
  }
}
