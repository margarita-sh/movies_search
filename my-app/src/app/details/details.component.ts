import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsModel, Result } from './model/details.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService } from '../service/movie.service';
import { Store, select } from '@ngrx/store';
import { MoviesState } from 'src/store/states/movies.state';
import { getMoviesDetails } from 'src/store/actions/movies.actions';
import { selectMovie, selectMoviesVideoKey } from 'src/store/selectors/movies.selectors';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
	public srcVideoFromYoutube: string = 'https://www.youtube.com/embed/';
	public srcVideo: string;
	public trustedUrl: SafeResourceUrl;
	public movieDetails$: Observable<DetailsModel> = this._store$.pipe(select(selectMovie));
	public selectMoviesVideoKey$: Observable<DetailsModel> = this._store$.pipe(select(selectMoviesVideoKey));

	constructor(private activateRoute: ActivatedRoute,
		 private sanitizer: DomSanitizer, public _store$: Store<MoviesState>) { }
	public ngOnInit(): void {

	 	this.activateRoute.queryParams.subscribe((queryParams: ActivatedRoute) => {
			const movieId: number = queryParams['movieId'];
			this._store$.dispatch(getMoviesDetails({ idMovie: movieId }));
			this.selectMoviesVideoKey$.subscribe((item: any)  => {
				this.srcVideo = this.srcVideoFromYoutube + item.key;
				this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.srcVideo);
			});
	 });
}
}
