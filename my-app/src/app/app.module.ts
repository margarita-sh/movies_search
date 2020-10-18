import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GenresComponent } from './genres/genres.component';
import { GenresService } from './genres/service/genres.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/service/search.service';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { DetailsService } from './details/service/details.service';
import { PopularComponent } from './popular/popular.component';
import { PopularService } from './popular/service/popular.service';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { A11yModule } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
	AppComponent,
	GenresComponent,
	SearchComponent,
	CardComponent,
	DetailsComponent,
	PopularComponent,
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	CommonModule,
	FormsModule,
	HttpClientModule,
	MatCarouselModule.forRoot(),
	A11yModule,
	MatButtonModule,
	MatIconModule,
	BrowserAnimationsModule,
  ],
  providers: [GenresService, SearchService, DetailsService, PopularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
