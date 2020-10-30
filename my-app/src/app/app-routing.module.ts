import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [

	{
		path: '', component: MovieListComponent, children: [
			{ path: 'genre', component: MovieListComponent },
			{ path: 'search', component: MovieListComponent },
		]
	},
	{ path: 'movie-detail', component: DetailsComponent },
	{ path: '**"', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
