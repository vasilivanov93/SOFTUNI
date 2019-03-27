import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Movie from '../models/Movie';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '&api_key=a2dfb3b8a6f5210abac13084816781bb';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  popularEndpoint = 'discover/movie?sort_by=popularity.desc';
  theatersEndpoint = 'discover/movie?primary_release_date.gte=2019-03-01&primary_release_date.lte=2019-03-31';
  popularKidsEndPoint = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  bestDramaEndPoint = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';
  constructor(private http: HttpClient) { }

  getPopular(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + this.popularEndpoint + API_KEY);
  }

  getTheaters(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + this.theatersEndpoint + API_KEY);
  }

  getPopularKids(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + this.popularKidsEndPoint + API_KEY);
  }

  getBestDrama(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + this.bestDramaEndPoint + API_KEY);
  }
}
