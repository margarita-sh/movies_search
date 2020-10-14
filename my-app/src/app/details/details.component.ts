import { Component, OnInit } from '@angular/core';
import { DetailsService } from './service/details.service';
import { DetailsModel } from './model/details.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
public idMovie: number;
  constructor(public fullDetails: DetailsService) { }

  public ngOnInit(): void {
	  this.fullDetails.id.subscribe((data: any) => console.log('data from details component', data));
  }

}
