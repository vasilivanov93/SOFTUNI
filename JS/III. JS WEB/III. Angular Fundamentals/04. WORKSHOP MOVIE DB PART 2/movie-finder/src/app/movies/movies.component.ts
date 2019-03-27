import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import Movie from '../models/Movie';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  popularMovies: Array<Movie>;
  theaterMovies: Array<Movie>;
  popularKidsMovies: Array<Movie>;
  bestDramaMovies: Array<Movie>;

  popularMoviesSub: Subscription;
  theatreMoviesSub: Subscription;
  popularKidsMoviesSub: Subscription;
  bestDramaMoviesSub: Subscription;

  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.popularMoviesSub = this.moviesService.getPopular().subscribe(popularMovies => {
      this.popularMovies = popularMovies['results'].slice(0, 6);
    });

    this.theatreMoviesSub = this.moviesService.getTheaters().subscribe(theaterMovies => {
      this.theaterMovies = theaterMovies['results'].slice(0, 6);
    });

    this.popularKidsMoviesSub = this.moviesService.getPopularKids().subscribe(popularKidsMovies => {
      this.popularKidsMovies = popularKidsMovies['results'].slice(0, 6);
    });


    this.bestDramaMoviesSub = this.moviesService.getBestDrama().subscribe(bestDramaMovies => {
      this.bestDramaMovies = bestDramaMovies['results'].slice(0, 6);
    });
  }

  ngOnDestroy() {
    this.popularMoviesSub.unsubscribe();
    this.theatreMoviesSub.unsubscribe();
    this.popularKidsMoviesSub.unsubscribe();
    this.bestDramaMoviesSub.unsubscribe();
  }
}
