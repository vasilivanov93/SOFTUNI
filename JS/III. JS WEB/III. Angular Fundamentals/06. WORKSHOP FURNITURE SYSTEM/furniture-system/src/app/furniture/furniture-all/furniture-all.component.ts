import { Component, OnInit } from '@angular/core';
import { Furniture } from '../models/furniture';
import { FurnitureService } from '../furniture.service';
import { Observable } from 'rxjs';
import {AuthService} from '../../authentication/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {
  furniture$: Observable<Array<Furniture>>;
  constructor(private furnitureService: FurnitureService,
              private router: Router,
              public authService: AuthService) { }

  ngOnInit() {
    this.furniture$ = this.furnitureService.getAllFurniture();
  }

  deleteFurniture(id) {
    this.furnitureService.deleteFurniture(id).subscribe((data) => {
      this.router.navigate([ '/furniture/all' ]);

      this.furniture$ = this.furnitureService.getAllFurniture();
    });
  }
}
