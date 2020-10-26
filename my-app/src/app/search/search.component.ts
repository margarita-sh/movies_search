import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	public nameMovie: string;

	// tslint:disable-next-line: no-empty
	public ngOnInit(): void {
	}
}
