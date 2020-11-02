import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GenresComponent } from './components/genres/genres.component';
import { SearchComponent } from './components/search/search.component';
import { MovieService } from './service/movie.service';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './components/details/details.component';
import { PopularComponent } from './components/popular/popular.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { GenresEffects } from 'src/store/effects/genres.effects';
import { reducer } from 'src/store';
import { MoviesEffects } from 'src/store/effects/movies.effects';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { DatePipe } from './pipe/data.pipe';
import { SliceStringPipe } from './pipe/sliceString.pipe';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MovieListGenreComponent } from './components/movie-list-genre/movie-list-genre.component';
import { MovieListTopComponent } from './components/movie-list-top/movie-list-top.component';
import { MovieListSearchComponent } from './components/movie-list-search/movie-list-search.component';
import { WatchListComponent } from './components/bookmarks/watchList.component';

@NgModule({
  declarations: [
	AppComponent,
	GenresComponent,
	SearchComponent,
	CardComponent,
	DetailsComponent,
	PopularComponent,
	MovieListComponent,
	DatePipe,
	SliceStringPipe,
	MovieListGenreComponent,
	MovieListTopComponent,
	MovieListSearchComponent,
	WatchListComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
 	CommonModule,
	FormsModule,
	HttpClientModule,
	MatButtonModule,
	MatIconModule,
	BrowserAnimationsModule,
	CarouselModule,
	RatingModule,
	ButtonModule,
	InputTextModule,
	MatPaginatorModule,
	StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
	StoreModule.forRoot(reducer),
	EffectsModule.forRoot([GenresEffects, MoviesEffects]),
	StoreRouterConnectingModule.forRoot(),
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
