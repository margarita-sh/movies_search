import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { GenresComponent } from './genres/genres.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
 /* 	{ path: '', component: SearchComponent }, */
   { path: 'movies', component: CardComponent },
	{ path: 'genre', component: GenresComponent },
	{ path: 'movie-detail', component: DetailsComponent },
	{ path: 'genre/:id/:name', component: MovieListComponent },
	{ path: 'search/:name', component: MovieListComponent },
	{ path: '**"', redirectTo: '/', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
