import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Cast } from './model/actors.model';
import { MoviesState } from 'src/store/states/movies.state';
import { Store, select } from '@ngrx/store';
import { selectActors } from 'src/store/selectors/movies.selectors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {
	public actors$:  Observable<Cast[]> = this._store$.pipe(select(selectActors));
/* @Input() public actors: Cast[]; */
public responsiveOptions: any;

  constructor(public _store$: Store<MoviesState>) {
	this.responsiveOptions = [
		{
			breakpoint: '1024px',
			numVisible: 3,
			numScroll: 3
		},
		{
			breakpoint: '768px',
			numVisible: 2,
			numScroll: 2
		},
		{
			breakpoint: '560px',
			numVisible: 1,
			numScroll: 1
		}
	];
  }

  // tslint:disable-next-line: no-empty
  public ngOnInit(): void {
  }

}
