import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../search/model/search.model';
import { DetailsService } from '../details/service/details.service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	@Input() public movie: Movie;
	public posterUrl: string;
	public imageBaseurl: string = 'https://image.tmdb.org/t/p/w200';
	   constructor(public details: DetailsService) { }

	public ngOnInit(): void {
		if (this.movie.poster_path === null) {
			this.posterUrl = '/assets/img/img-not-found.png';
		} else {
			this.posterUrl = this.imageBaseurl + this.movie.poster_path;
		}
	}
}
