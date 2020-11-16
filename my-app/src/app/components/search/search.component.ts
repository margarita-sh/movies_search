import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
/* 	public nameMovie: string; */
public nameMovie: string;
constructor(public router: Router) {
}
	// tslint:disable-next-line: no-empty
	public ngOnInit(): void {
	}

	/* public onSubmit(event: any): void {
		console.log('yyy', this.nameMovie);
		event.preventDefault();
		this.router.navigateByUrl('/search/' + this.nameMovie);

	} */

	public submit(form: NgForm): void {
		console.log(form);
		this.router.navigateByUrl('/search/' + this.nameMovie);
	}
}
