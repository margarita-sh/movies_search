import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GenresComponent } from './genres/genres.component';
import { GenresService } from './genres/service/genres.service';

@NgModule({
  declarations: [
	AppComponent,
	GenresComponent,
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	CommonModule,
	FormsModule,
	HttpClientModule,
  ],
  providers: [GenresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
