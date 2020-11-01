import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListTopComponent } from './movie-list-top/movie-list-top.component';
import { MovieListGenreComponent } from './movie-list-genre/movie-list-genre.component';
import { MovieListSearchComponent } from './movie-list-search/movie-list-search.component';

const routes: Routes = [
  	{ path: '', component: MovieListTopComponent }, // here add path
	{ path: 'genre/:id', component: MovieListGenreComponent },
	{ path: 'genre/:id/:page', component: MovieListGenreComponent },
	{ path: 'search/:nameMovie', component: MovieListSearchComponent },
	{ path: 'search/:nameMovie/:page', component: MovieListSearchComponent },
	{ path: 'movie-detail/:movieId', component: DetailsComponent },
	{ path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
