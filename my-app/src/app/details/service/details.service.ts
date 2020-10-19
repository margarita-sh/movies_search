import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
 private _mykey: string = '18bd769b55c7b82cb7afd56416616c0e';
  constructor(private _http: HttpClient) {
   }

public getDetails(movie_id: number): Observable<any> {
	return this._http.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this._mykey}&append_to_response=videos`);
}

}
