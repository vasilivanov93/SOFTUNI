import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  phoneCodes: Array<string> = ['+359', '+971', '+972', '+198', '+701'];
  jobPositions: Array<string> = ['Designer', 'Manager', 'Accounting'];

  constructor() { }

  ngOnInit() {
  }

  register() {
    this.form.reset();
    console.log(this.form)
  }

}
