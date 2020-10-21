import { Component, OnInit } from '@angular/core';
import { Movie } from '../search/model/search.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
	public listOfMovies: Movie[] = [];
	constructor(
		private route: ActivatedRoute,
		private movie: MovieService,
	) { }

	public ngOnInit(): void {
		const routeName: string = this.route.snapshot.routeConfig.path;
		console.log('routeName', routeName);
		if (routeName === '') {
			this.movie.getTopMovie().subscribe((items: Movie[]) => {
				this.listOfMovies = items;
			});
		} else {
			this.route.paramMap.subscribe((data: any) => {
				if (routeName === 'genre/:id/:name') {
					const genreId: number = data.params.id;
					this.movie.searchFilmByGenres(genreId).subscribe((items: Movie[]) => {
						this.listOfMovies = items;
					});
				} else if (routeName === 'search/:name') {
					const name: string = data.params.name;
					this.movie.searchFilm(name).subscribe((items: Movie[]) => {
						this.listOfMovies = items;
					});
				}
			});
		}

	}

}
