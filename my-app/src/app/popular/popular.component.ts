import { Component, OnInit } from '@angular/core';
import { Result, Movie } from '../search/model/search.model';
import { MovieService } from '../service/movie.service';

@Component({
	selector: 'app-popular',
	templateUrl: './popular.component.html',
	styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

	public movies: Movie[];
	public responsiveOptions: any = [
		{
			breakpoint: '1024px',
			numVisible: 6,
			numScroll: 3
		},
		{
			breakpoint: '768px',
			numVisible: 4,
			numScroll: 1
		},
		{
			breakpoint: '560px',
			numVisible: 3,
			numScroll: 1
		}
	];
	constructor(public movieService: MovieService) { }
	public ngOnInit(): void {
		this.movieService.getPopularMovies().subscribe((item: Result) => {
			this.movies = item.results ;
		});

	}

}
