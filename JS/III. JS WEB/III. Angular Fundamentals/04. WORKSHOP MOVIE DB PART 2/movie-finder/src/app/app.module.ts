import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import {MovieService} from "./services/movie.service";
import {HttpClientModule} from "@angular/common/http";
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {SingleMovieResolver} from "./services/single-movie.resolver";
import {MovieListResolver} from "./services/movie-list.resolver";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SingleMovieResolver, MovieListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
