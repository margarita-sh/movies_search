import { Component, OnInit } from '@angular/core';
import { Movie } from './model/search.model';
import { Router } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	public nameMovie: string;
	public listOfMovies: Movie[];

	constructor(private movie: MovieService, private router: Router) { }

	// tslint:disable-next-line: no-empty
	public ngOnInit(): void {
	}

	public resultSearchMovie(): void {
		this.router.navigate(['search', this.nameMovie]);
	}

}
