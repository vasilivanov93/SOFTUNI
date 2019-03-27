import {Component, OnInit} from '@angular/core';
import Movie from '../models/Movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<Movie>;
  theaterMovies: Array<Movie>;
  popularKidsMovies: Array<Movie>;
  bestDramaMovies: Array<Movie>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const [ popular, theatres, kids, drama ] = this.route.snapshot.data['movieList'];

    this.popularMovies = popular;
    this.theaterMovies = theatres;
    this.popularKidsMovies = kids;
    this.bestDramaMovies = drama;
  }
}
