import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GenresComponent } from './genres/genres.component';
import { GenresService } from './genres/service/genres.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/service/search.service';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { DetailsService } from './details/service/details.service';

@NgModule({
  declarations: [
	AppComponent,
	GenresComponent,
	SearchComponent,
	CardComponent,
	DetailsComponent,
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	CommonModule,
	FormsModule,
	HttpClientModule,
  ],
  providers: [GenresService, SearchService, DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
