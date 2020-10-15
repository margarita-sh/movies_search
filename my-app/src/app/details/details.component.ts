import { Component, OnInit } from '@angular/core';
import { DetailsService } from './service/details.service';
import { ActivatedRoute } from '@angular/router';
import { DetailsModel, Videos, Result } from './model/details.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
	public movieDetails$: Observable<DetailsModel>;
	public keyForVideo: string;
	constructor(public detailsService: DetailsService, private activateRoute: ActivatedRoute) { }

	public ngOnInit(): void {
		this.activateRoute.queryParams.subscribe((queryParams: ActivatedRoute) => {
			this.movieDetails$ = this.detailsService.getDetails(queryParams['movieId']);
			this.keyForVideo  = this.movieDetails$.pipe((item: DetailsModel) => {
				item.videos.results.map((data: Result) => { 
					console.log('data', data);

				});
			}).subscribe(item => item);
			console.log('this.keyForVideo', this.keyForVideo);
		});


	}

}
