import { Component, OnInit } from '@angular/core';
import { Genres } from './model/genres.model';
import { Movie } from '../search/model/search.model';
import { MovieService } from '../service/movie.service';

@Component({
	selector: 'app-genres',
	templateUrl: './genres.component.html',
	styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
	public genresMovies: Genres[] = [];
	public listOfMovies: Movie[];
	constructor(private movie: MovieService) { }

	public ngOnInit(): void {
		this.movie.outputGenres().subscribe((data: any) =>  this.genresMovies = data);
	}
}
