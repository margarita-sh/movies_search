import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie, ResultMovies} from '../search/model/search.model';
import { Genres } from 'src/app/genres/model/genres.model';

@Injectable({
	providedIn: 'root'
})
export class MovieService {
	private _mykey: string = '18bd769b55c7b82cb7afd56416616c0e';
	private url: string = 'https://api.themoviedb.org/3/';
	// https://api.themoviedb.org/3/movie/popular?api_key=###&page=1
	constructor(private _http: HttpClient) {
	}
	 public searchFilm(query: string): Observable<ResultMovies> {
		return this._http.get(`${this.url}search/movie?api_key=${this._mykey}&language=en-US&query=${query}`).pipe(
			map((item: ResultMovies) => item));
	}

	public searchFilmByGenres(id: number): Observable<ResultMovies> {
		return this._http.get(`${this.url}discover/movie?api_key=${this._mykey}&with_genres=${id}`).pipe(
			map((item: ResultMovies) => item));
	}

 	public getTopMovie(page: number): Observable<ResultMovies> {
		console.log('page', page);
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
