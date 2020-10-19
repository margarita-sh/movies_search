import { Component, OnInit } from '@angular/core';
import { GenresService } from './service/genres.service';
import { Genres } from './model/genres.model';
import { SearchService } from '../search/service/search.service';
import { Movie } from '../search/model/search.model';

@Component({
	selector: 'app-genres',
	templateUrl: './genres.component.html',
	styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
	public genresMovies: Genres[] = [];
	public listOfMovies: Movie[];
	constructor(private resultGenres: GenresService, private searchByGenres: SearchService) { }

	public ngOnInit(): void {
		this.resultGenres.outputGenres().subscribe((data: any) =>  this.genresMovies = data);
	}
}
