import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 private _mykey: string = '18bd769b55c7b82cb7afd56416616c0e';
 private _tokenAcces: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGJkNzY5YjU1YzdiODJjYjdhZmQ1NjQxNjYxNmMwZSIsInN1YiI6IjVmODRkMzI4OGUyYmE2MDAzNmU3ZjcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1pAqn-tpXTDAxNE89ol8m7nfzIqrRrdz5fNUM013IM';
 // public query: string = '';
  constructor(private _http: HttpClient) {
   }
  public searchFilm(query: string): Observable<any> {
	return this._http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this._mykey}&language=en-US&query=${query}`).pipe(
		map((item: any) => item.results));
}
}
