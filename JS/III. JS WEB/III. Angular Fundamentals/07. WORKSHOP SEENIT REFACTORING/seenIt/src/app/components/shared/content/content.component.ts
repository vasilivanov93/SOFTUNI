import {Component, DoCheck } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements DoCheck {
  isLoggedIn: boolean;
  constructor(private authService: AuthService) { }

  ngDoCheck() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
}
