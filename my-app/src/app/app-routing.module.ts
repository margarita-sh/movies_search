import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PopularComponent } from './popular/popular.component';
import { GenresEffects } from 'src/store/effects/genres.effects';
import { GenresComponent } from './genres/genres.component';
import { combineAll } from 'rxjs/operators';

const routes: Routes = [
	/* { path: 'movie-detail/:id', component: DetailsComponent },
	 {
		path: '', component: MovieListComponent, children: [
			{ path: 'genre/:id/:name', component: MovieListComponent },
			{ path: 'search/:name', component: MovieListComponent },
		]
	} ,
	{ path: '**"', redirectTo: '/', pathMatch: 'full' } */
	{path: '', component: HomeComponent,  children: [
		{path: '', component: SearchComponent},
		{path: '', component: PopularComponent},
 		{path: '', component: GenresComponent},
		{path: '', component: MovieListComponent, children: [
			{ path: 'genre/:id/:name', component: MovieListComponent },
			{ path: 'search/:name', component: MovieListComponent },
	/* 		{ path: 'movie-detail', component: DetailsComponent }, */
		]},
	]},
	{ path: 'movie-detail', component: DetailsComponent },
	{ path: '**"', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
