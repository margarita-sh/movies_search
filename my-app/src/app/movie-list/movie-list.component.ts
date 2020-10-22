import { Component, OnInit } from '@angular/core';
import { Movie } from '../search/model/search.model';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectMovies } from 'src/store/selectors/movies.selectors';
import { MoviesState } from 'src/store/states/movies.state';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
	public listOfMovies: Movie[] = [];
	public movies$: Observable<Movie[]> = this._store$.pipe(select(selectMovies));
	/* public genres$: Observable<Genres[]> = this._store$.pipe(select(selectGenres)); */
	/* public id: any = this.genres$.subscribe((item: Genres[])  => item.map((i: Genres) => i.id)); */
	constructor(
		private route: ActivatedRoute,
/* 		private movie: MovieService, */
		public _store$: Store<MoviesState>,
/* 		public _storeGenres$: Store<GenresState> */
	) { }

	public ngOnInit(): void {
console.log(this.route.snapshot.routeConfig.children);

		/*  this._store$.dispatch(getMoviesByGenres({id: this.id}));  */
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
