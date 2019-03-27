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
  id: string;
  movie: MovieDetails;
  movieGenre: string;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.movieService.getMovieById(this.id).subscribe((data) => {
      this.movie = data;
      this.movieGenre = this.movie.genres.map(genre => genre['name']).join(', ');
    });
  }

}
