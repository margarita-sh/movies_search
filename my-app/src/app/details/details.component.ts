import { Component, OnInit } from '@angular/core';
import { DetailsService } from './service/details.service';
import { ActivatedRoute } from '@angular/router';
import { DetailsModel, Videos, Result } from './model/details.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
	public movieDetails$: Observable<DetailsModel>;
/* 	public keyForVideo: string; */
	public srcVideoFromYoutube: string = 'https://www.youtube.com/embed/';
	public srcVideo: string;
	public trustedUrl: any;

	constructor(public detailsService: DetailsService, private activateRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

	public ngOnInit(): void {
		// tslint:disable-next-line: deprecation
		this.activateRoute.queryParams.subscribe((queryParams: ActivatedRoute) => {
			this.movieDetails$ = this.detailsService.getDetails(queryParams['movieId']);
			if (this.movieDetails$) {
				this.movieDetails$.pipe(
					map((item: DetailsModel) => {
						return item.videos.results.find((data: Result) => {
							return data.key;
						});
					})
				).subscribe((item: Result)  => {
					this.srcVideo = this.srcVideoFromYoutube + item.key;
					this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.srcVideo);
				});
			}

		});

	}

}
