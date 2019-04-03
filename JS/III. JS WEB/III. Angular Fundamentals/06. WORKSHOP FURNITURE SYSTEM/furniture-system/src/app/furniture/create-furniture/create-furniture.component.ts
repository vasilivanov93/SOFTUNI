import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {FurnitureService} from '../furniture.service';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  @ViewChild('createForm') createForm: NgForm;

  constructor(private furnitureService: FurnitureService,
              private router: Router) { }

  ngOnInit() {
  }

  createFurniture() {
    console.log(this.createForm);

    this.furnitureService
      .create(this.createForm.value)
      .subscribe((data) => {
        console.log(data);

        this.router.navigate([ '/furniture/all' ]);
      });
  }
}
