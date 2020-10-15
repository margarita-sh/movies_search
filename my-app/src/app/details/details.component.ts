import { Component, OnInit } from '@angular/core';
import { DetailsService } from './service/details.service';
import { ActivatedRoute } from '@angular/router';
import { DetailsModel } from './model/details.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
 public movieDetails$: Observable<DetailsModel>;
  constructor(public detailsService: DetailsService, private activateRoute: ActivatedRoute) { }

  public ngOnInit(): void {
	this.activateRoute.queryParams.subscribe((queryParams: ActivatedRoute) => {
		this.movieDetails$ = this.detailsService.getDetails(queryParams['movieId']);
	});
  }

}
