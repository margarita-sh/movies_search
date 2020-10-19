import { Component, OnInit } from '@angular/core';
import { Movie } from '../search/model/search.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SearchService } from '../search/service/search.service';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
	public listOfMovies: Movie[] = [];
	constructor(
		private route: ActivatedRoute,
		private search: SearchService,
	) { }

	public ngOnInit(): void {
		console.log(this.route.snapshot);
		const routeName: string = this.route.snapshot.routeConfig.path;
		console.log(routeName);
		this.route.paramMap.subscribe((data: any)  => {
			console.log(data);

			if (routeName === 'genre/:id/:name') {
				const genreId: number = data.params.id;
				this.search.searchFilmByGenres(genreId).subscribe((items: Movie[]) => {
					this.listOfMovies = items;
				});
			} else if (routeName === 'search/:name') {
				const name: string = data.params.name;
				this.search.searchFilm(name).subscribe((item: Movie[]) => {
					this.listOfMovies = item;
				});
			}
		  });

	}

}
