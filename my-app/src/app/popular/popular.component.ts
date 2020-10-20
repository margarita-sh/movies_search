import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/service/search.service';
import { Result, Movie } from '../search/model/search.model';

@Component({
	selector: 'app-popular',
	templateUrl: './popular.component.html',
	styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
	// public posterUrl: string;
	// public imageBaseurl: string = 'https://image.tmdb.org/t/p/w200';
	public listOfPopularMovies: [Result[]];
	public sizeSubarray: number = 5;

	constructor(public popularMovies: SearchService) { }

	public ngOnInit(): void {
		this.popularMovies.getPopularMovies().subscribe((item: Result) => {
			this.listOfPopularMovies = item.results.reduce((acc: any, cur: Movie) => {
				if (acc[acc.length - 1].length === this.sizeSubarray) {
					acc.push([]);
				}
				acc[acc.length - 1].push(cur);
				return acc;

			}, [[]]);
		});

}

}
