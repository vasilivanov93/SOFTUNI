import {Component, OnInit, ViewChild} from '@angular/core';
import {FurnitureService} from '../furniture.service';
import {Furniture} from '../models/furniture';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  furniture: Furniture;
  @ViewChild('editForm') editForm: NgForm;
  furniture$: Observable<Array<Furniture>>;
  constructor(private route: ActivatedRoute,
              private furnitureService: FurnitureService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      const id = data['id'];

      this.furnitureService.getFurnitureById(id).subscribe((furniture) => {
        this.furniture = furniture;
      });
    });
  }

  editFurniture() {
    this.route.params.subscribe((data) => {
      const id = data['id'];

      this.furnitureService.editFurniture(id, this.editForm.value).subscribe((furniture) => {
        this.furniture$ = this.furnitureService.getAllFurniture();

        this.router.navigate([ '/furniture/all' ]);
      });
    });
  }
}
