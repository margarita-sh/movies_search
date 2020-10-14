import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
 private _mykey: string = '18bd769b55c7b82cb7afd56416616c0e';

  constructor(private _http: HttpClient) {
   }
  public searchFilm(movie_id): Observable<any> {
	return this._http.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this._mykey}&language=en-US`).pipe(
		map((item: any) => item.results));
}
}
