import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';
import {MovieService} from './services/movie.service';
import { Routes, RouterModule }  from '@angular/router';
import {RoutingComponent} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    RouterModule,
    RoutingComponent
  ],
  providers: [MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
