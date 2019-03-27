import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import MovieDetails from '../models/MovieDetails';
import {Observable} from 'rxjs';
import {MovieService} from './movie.service';

@Injectable()
export class SingleMovieResolver implements Resolve<MovieDetails> {

  constructor(private movieService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetails> | Promise<MovieDetails> | MovieDetails {
    const id = route.params['id'];

    return this.movieService.getMovieById(id);
  }

}
