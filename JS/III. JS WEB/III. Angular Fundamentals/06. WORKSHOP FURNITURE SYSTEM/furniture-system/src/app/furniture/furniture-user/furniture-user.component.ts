import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FurnitureService } from '../furniture.service';
import { Furniture } from '../models/furniture';

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit {
  userFurniture$: Observable<Array<Furniture>>;
  constructor(private furnitureService: FurnitureService,  private router: Router) { }

  ngOnInit() {
    this.userFurniture$ = this.furnitureService.getMyFurniture();
  }

  deleteFurniture(id) {
    this.furnitureService.deleteFurniture(id).subscribe((data) => {
      this.router.navigate([ '/furniture/user' ]);

      this.userFurniture$ = this.furnitureService.getMyFurniture();
    });
  }
}
