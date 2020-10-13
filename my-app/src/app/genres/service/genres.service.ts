import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Genres } from '../model/genres.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
 private _mykey: string = '18bd769b55c7b82cb7afd56416616c0e';
 private _tokenAcces: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGJkNzY5YjU1YzdiODJjYjdhZmQ1NjQxNjYxNmMwZSIsInN1YiI6IjVmODRkMzI4OGUyYmE2MDAzNmU3ZjcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1pAqn-tpXTDAxNE89ol8m7nfzIqrRrdz5fNUM013IM';
//  public genres: any;
  constructor(private _http: HttpClient) {
   }

  public searchFilm(): Observable<Genres> {
	return this._http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this._mykey}&language=en-US`).pipe(
		map((item: any) => item.genres));
}
}
