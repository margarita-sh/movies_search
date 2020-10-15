import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
 	{ path: '', component: SearchComponent },
 /*   { path: '', component: CardComponent }, */
	{ path: 'movie-detail', component: DetailsComponent },
	{ path: '**"', redirectTo: '/', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
