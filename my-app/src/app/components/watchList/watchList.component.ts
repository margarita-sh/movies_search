import { Component, OnInit } from '@angular/core';
import { MoviesEffects } from 'src/store/effects/movies.effects';
import { Store} from '@ngrx/store';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watchList.component.html',
  styleUrls: ['./watchList.component.scss']
})
export class WatchListComponent implements OnInit {

  constructor(private _store$: Store<MoviesEffects>) { }

  // tslint:disable-next-line: no-empty
  public  ngOnInit(): void {}
}
