import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {forkJoin} from 'rxjs';
import {MovieService} from './movie.service';
import Movie from '../models/Movie';

@Injectable()
export class MovieListResolver implements Resolve<Movie[]> {
  constructor(private movieService: MovieService) {}

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return forkJoin(
      this.movieService.getPopular(),
      this.movieService.getTheaters(),
      this.movieService.getPopularKids(),
      this.movieService.getBestDrama()
    );
  }
}
