import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Furniture } from './models/furniture';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private readonly createUrl = 'http://localhost:5000/furniture/create';
  private readonly getAllUrl = 'http://localhost:5000/furniture/all';
  private readonly getDetailsUrl = 'http://localhost:5000/furniture/details/';

  constructor(private http: HttpClient) { }

  create(body) {
    return this.http.post<Furniture>(this.createUrl, body);
  }

  getAllFurniture(): Observable<Array<Furniture>> {
    return this.http.get<Array<Furniture>>(this.getAllUrl);
  }

  getFurnitureDetails(id): Observable<Furniture> {
    return this.http.get<Furniture>(this.getDetailsUrl + id);
  }
}
