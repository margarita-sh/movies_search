import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PopularService {
 private _mykey: string = '18bd769b55c7b82cb7afd56416616c0e';
  constructor(private _http: HttpClient) {
   }

public getPopularMovies(): Observable<any> {
	return this._http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this._mykey}&language=en-US&page=1`);
}

}
