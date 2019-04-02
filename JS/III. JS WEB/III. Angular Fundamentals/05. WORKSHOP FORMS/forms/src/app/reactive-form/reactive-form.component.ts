import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form;
  phoneCodes: Array<string> = ['+359', '+971', '+972', '+198', '+701'];
  jobPositions: Array<string> = ['Designer', 'Manager', 'Accounting'];
  constructor(private fb: FormBuilder) { }

  get f() {
    return this.form.controls;
  }

  get password() {
    return this.form.controls.passwords.controls.password;
  }

  get repeatPassword() {
    return this.form.controls.passwords.controls.repeatPassword;
  }

  ngOnInit() {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/[A-z][a-z]+\s[A-z][a-z]+/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^\w+@\w+\..{2,3}(.{2,3})?$/)]],
      phoneCode: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      jobPosition: ['', [Validators.required]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{3,16}$/)]],
        repeatPassword: ['', [Validators.required]]
      }),
      image: ['', [Validators.required]]
    });
  }

  register() {
    this.form.reset();
  }
}
