import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {MoviesComponent} from './movies/movies.component';
import {SingleMovieResolver} from './services/single-movie.resolver';
import {MovieListResolver} from './services/movie-list.resolver';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'movies'},
  {path: 'movies', component: MoviesComponent, resolve: {movieList: MovieListResolver}},
  {path: 'movies/:id', component: MovieDetailsComponent, resolve: {singleMovie: SingleMovieResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
