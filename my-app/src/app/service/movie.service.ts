import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Movie, ResultMovies } from '../components/search/model/search.model';
import { Genres } from 'src/app/components/genres/model/genres.model';
import { Result } from '../components/details/model/details.model';

@Injectable({
	providedIn: 'root'
})
export class MovieService {
	private _mykey: string = '18bd769b55c7b82cb7afd56416616c0e';
	private url: string = 'https://api.themoviedb.org/3/';
	private keyForLocalStorage: string = 'keyForLocalStorageBookmarks';
	constructor(private _http: HttpClient) {
	}

	public save(movies: Movie[]): void {
		const dataForLocalSrorageString: string = JSON.stringify(movies);
		localStorage.setItem(this.keyForLocalStorage, dataForLocalSrorageString);
	}

	public loadMovieListFromLocalStorage(page: number): Observable<any> {
		const gettingDataFromLocalStorage: string = localStorage.getItem(this.keyForLocalStorage);
		if (gettingDataFromLocalStorage !== null) {
			const moviesFromStorage: any = JSON.parse(gettingDataFromLocalStorage);
			const offset: number = (page - 1 ) * 20;
			moviesFromStorage.results = moviesFromStorage.results.slice(offset, offset + 20);
			moviesFromStorage.page = page;
			return of(moviesFromStorage);
		}
		return of([]);
	}

	public addNewMoviesToBookmarks(movies: Movie[]): void {
		const dataFromLocalSrorageString: string = localStorage.getItem(this.keyForLocalStorage);
		const totalMovieOnPage: number = 20;
		// tslint:disable-next-line: strict-boolean-expressions
		if (dataFromLocalSrorageString !== null) {
			const moviesFromLocalStorage: Movie[] = JSON.parse(dataFromLocalSrorageString);
			movies = movies.filter((item: Movie) => {
				const result: Movie = moviesFromLocalStorage['results'].find((data: Movie) => {
					return data.id === item.id;
				});
				if (result) {
					return false;
				} else {
					return true;
				}
			});

			const moviesForLocalStorage: any = moviesFromLocalStorage['results'].concat(movies);
			const totalResults: number = moviesForLocalStorage.length;
			const totalPages: number  = totalResults < totalMovieOnPage ? 1 : Math.ceil(totalResults / totalMovieOnPage);
			const dataForLS: any = { results: moviesForLocalStorage, total_results: totalResults, total_pages: totalPages};
			// tslint:disable-next-line: no-magic-numbers
			localStorage.clear();
			localStorage.setItem(this.keyForLocalStorage, JSON.stringify(dataForLS));
		} else {
			const dataForLS: any = { results: movies, total_results: movies.length,
				 total_pages: movies.length < totalMovieOnPage ? 1 : Math.ceil(movies.length / totalMovieOnPage)};
			localStorage.setItem(this.keyForLocalStorage, JSON.stringify(dataForLS));
		}
	}

	public searchFilm(query: string, page: number): Observable<ResultMovies> {
		return this._http.get(`${this.url}search/movie?api_key=${this._mykey}&page=${page}&language=en-US&query=${query}`).pipe(
			map((item: ResultMovies) => item));
	}

	public searchFilmByGenres(id: number, page: number): Observable<ResultMovies> {
		return this._http.get(`${this.url}discover/movie?api_key=${this._mykey}&page=${page}&with_genres=${id}`).pipe(
			map((item: ResultMovies) => item));
	}

	public getTopMovie(page: number): Observable<ResultMovies> {
		return this._http.get(`${this.url}movie/top_rated?api_key=${this._mykey}&page=${page}&language=en-US`).pipe(
			map((item: ResultMovies) => item));
	}

	public getPopularMovies(): Observable<Movie[]> {
		return this._http.get(`${this.url}movie/popular?api_key=${this._mykey}&language=en-US&page=1`).pipe(
			map((item: ResultMovies) => item.results));
	}

	public getDetails(movie_id: number): Observable<any> {
		return this._http.get(`${this.url}movie/${movie_id}?api_key=${this._mykey}&append_to_response=videos`);
	}
	public outputGenres(): Observable<Genres> {
		return this._http.get(`${this.url}genre/movie/list?api_key=${this._mykey}&language=en-US`).pipe(
			map((item: any) => item.genres));
	}

}
