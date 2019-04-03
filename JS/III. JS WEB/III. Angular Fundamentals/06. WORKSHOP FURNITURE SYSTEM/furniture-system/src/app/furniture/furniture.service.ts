import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Furniture } from './models/furniture';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private readonly createUrl = 'http://localhost:5000/furniture/create';

  constructor(private http: HttpClient) { }

  create(body) {
    return this.http.post<Furniture>(this.createUrl, body);
  }
}
