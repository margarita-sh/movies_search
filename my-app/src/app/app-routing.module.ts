import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListTopComponent } from './components/movie-list-top/movie-list-top.component';
import { MovieListGenreComponent } from './components/movie-list-genre/movie-list-genre.component';
import { MovieListSearchComponent } from './components/movie-list-search/movie-list-search.component';
import { WatchListComponent } from './components/watchList/watchList.component';
import { MovieListBookmarksComponent } from './components/movie-list-bookmarks/movie-list-bookmarks.component';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';

const routes: Routes = [
	{ path: '', component: MovieListTopComponent }, // here add path
	{ path: 'genre/:id', component: MovieListGenreComponent },
	{ path: 'genre/:id/:page', component: MovieListGenreComponent },
	{ path: 'search/:nameMovie', component: MovieListSearchComponent },
	{ path: 'search/:nameMovie/:page', component: MovieListSearchComponent },
	{ path: 'movie-detail/:movieId', component: DetailsComponent },
	{ path: 'watchMovie', component: MovieListBookmarksComponent },
	{ path: 'person/:id', component: ActorDetailsComponent },
	{ path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
