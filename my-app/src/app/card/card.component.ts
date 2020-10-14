import { Component, OnInit, Input } from '@angular/core';
import { Search } from '../search/model/search.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 @Input() public movie: Search;
/*   constructor() { } */
public imageBaseurl: string = 'https://image.tmdb.org/t/p/w500';
/* public srcMovie: string = this.imageBaseurl + this.movie.poster_path; */

  public ngOnInit(): void {
	console.log('movie', this.movie);
/* 	console.log(this.srcMovie); */
	console.log('poster_path', this.movie.poster_path);
  }
}
