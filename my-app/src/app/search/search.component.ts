import { Component, OnInit } from '@angular/core';
import { SearchService } from './service/search.service';
import { Search } from './model/search.model';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	public nameMovie: string;
	public listOfMovies: Search[];

	constructor(private searchMovies: SearchService) { }

	// tslint:disable-next-line: no-empty
	public ngOnInit(): void {
	}

	public resultSearchMovie(): void {
		this.searchMovies.searchFilm(this.nameMovie).subscribe((item: Search[]) => {
			this.listOfMovies = item;
			console.log('this.listOfMovies', this.listOfMovies);
		});
	}

}
