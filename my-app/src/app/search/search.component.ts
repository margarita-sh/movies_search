import { Component, OnInit } from '@angular/core';
import { Movie } from './model/search.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
// import { MoviesState } from 'src/store/states/movies.state';
import { getMoviesFromSearch } from 'src/store/actions/movies.actions';
import { MoviesState } from 'src/store/states/movies.state';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	public nameMovie: string;

	// tslint:disable-next-line: no-empty
	constructor()  { }

	// tslint:disable-next-line: no-empty
	public ngOnInit(): void {
	}
}
