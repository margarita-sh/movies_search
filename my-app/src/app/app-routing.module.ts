import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  	{ path: '', component: MovieListComponent }, // here add path
	{ path: 'genre/:id', component: MovieListComponent },
	{ path: 'search/:nameMovie', component: MovieListComponent },
	{ path: 'movie-detail/:movieId', component: DetailsComponent },
	{ path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
