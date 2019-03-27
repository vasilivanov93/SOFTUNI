import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { SingleMovieResolver } from '../services/single-movie.resolver';
import { MovieListResolver } from '../services/movie-list.resolver';

@NgModule({
  declarations:
    [MoviesComponent,
      MovieComponent,
      MovieDetailsComponent,
      MovieSearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [SingleMovieResolver, MovieListResolver]
})
export class MovieModule {
}
