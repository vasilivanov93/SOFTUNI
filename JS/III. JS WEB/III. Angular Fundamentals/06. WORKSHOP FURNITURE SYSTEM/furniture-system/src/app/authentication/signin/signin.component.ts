import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService
      .login(this.loginForm.value)
      .subscribe((data) => {
        localStorage.setItem('token', data['token']);
        localStorage.setItem('username', data['user']['name']);
        localStorage.setItem('isAdmin', data['user']['isAdmin']);
        this.toastr.success(data['message']);
        this.router.navigate([ '/home' ]);
      });
  }
}
