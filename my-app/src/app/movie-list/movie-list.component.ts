import { Component, OnInit } from '@angular/core';
import { Movie } from '../search/model/search.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { GenresState } from 'src/store/states/genres.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Genres } from '../genres/model/genres.model';
import { selectGenres } from 'src/store/selectors/genres.selectors';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
	public listOfMovies: Movie[] = [];
	public genres$: Observable<Genres[]> = this._store$.pipe(select(selectGenres));
	constructor(
		private route: ActivatedRoute,
		private movie: MovieService,
		public _store$: Store<GenresState>
	) { }

	public ngOnInit(): void {

		/* const routeName: string = this.route.snapshot.routeConfig.path;
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
 */
	}

}
