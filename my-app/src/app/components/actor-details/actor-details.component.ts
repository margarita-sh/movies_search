import { Component, OnInit } from '@angular/core';
import { ActorDetails } from './model/actor-details.model';
import { Store, select } from '@ngrx/store';
import { selectDetailsActor } from 'src/store/selectors/movies.selectors';
import { Observable } from 'rxjs';
import { MoviesState } from 'src/store/states/movies.state';
import { ActivatedRoute } from '@angular/router';
import { getDetailsActor } from 'src/store/actions/movies.actions';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {
	public actor$: Observable<ActorDetails> = this._store$.pipe(select(selectDetailsActor));
  constructor(public _store$: Store<MoviesState>, private activateRoute: ActivatedRoute) { }

  public ngOnInit(): void {
	  this.activateRoute.params.subscribe((params: any) => {
		const actorId: number = params['id'];
		this._store$.dispatch(getDetailsActor({ idActor : actorId}));
	  });
  }

}
