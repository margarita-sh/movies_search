import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
	{ path: 'movie-detail/:id', component: DetailsComponent },
	{
		path: '', component: MovieListComponent, children: [
			{ path: 'genre/:id/:name', component: MovieListComponent },
			{ path: 'search/:name', component: MovieListComponent },
		]
	},
	{ path: '**"', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
