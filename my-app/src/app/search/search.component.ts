import { Component, OnInit } from '@angular/core';
import { SearchService } from './service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchMovies: SearchService) { }

  // tslint:disable-next-line: no-empty
  public ngOnInit(): void {
  }

  public resultSearchMovie(nameMovie: string): void {
this.searchMovies.searchFilm(nameMovie).subscribe((item: any) => console.log(item));
  }

}
