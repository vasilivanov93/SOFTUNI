import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MovieService} from '../services/movie.service';
import MovieDetails from "../models/MovieDetails";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieDetails;
  movieGenre: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.movie = this.route.snapshot.data['singleMovie'];
    this.movieGenre = this.movie.genres.map(genre => genre['name']).join(', ');
  }

}
