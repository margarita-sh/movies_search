import { Component, OnInit } from '@angular/core';
import { PopularService } from './service/popular.service';
import { Popular, Result } from './model/popular.model';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

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

	constructor(public popularMovies: PopularService) { }

	public ngOnInit(): void {
		this.popularMovies.getPopularMovies().subscribe((item: Popular) => {
			this.listOfPopularMovies = item.results.reduce((acc: any, cur: Result) => {
				if (acc[acc.length - 1].length === this.sizeSubarray) {
					acc.push([]);
				}
				acc[acc.length - 1].push(cur);
				return acc;

			}, [[]]);
		});

}

}
