import { Component, OnInit } from '@angular/core';
import { Genres } from './model/genres.model';
import { GenresState } from 'src/store/states/genres.state';
import { Store, select } from '@ngrx/store';
import { selectGenres } from 'src/store/selectors/genres.selectors';
import { Observable } from 'rxjs';
import { getGenres } from 'src/store/actions/genres.actions';

@Component({
	selector: 'app-genres',
	templateUrl: './genres.component.html',
	styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
	public genres$: Observable<Genres[]> = this._store$.pipe(select(selectGenres));
	constructor(public _store$: Store<GenresState>) { }

	public ngOnInit(): void {
		this._store$.dispatch(getGenres({}));
	}
}
