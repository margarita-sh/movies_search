import { Component, OnInit } from '@angular/core';
import { GenresService } from './service/genres.service';
import { Genres } from './model/genres.model';

@Component({
	selector: 'app-genres',
	templateUrl: './genres.component.html',
	styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
	public genresMovies: Genres[] = [];

	constructor(private resultGenres: GenresService) { }

	public ngOnInit(): void {
		 this.resultGenres.searchFilm().subscribe((data: any) =>  data.map((item: any) => this.genresMovies.push(item.name)));
	}

}
