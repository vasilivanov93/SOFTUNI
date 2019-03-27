import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild('form') searchForm: NgForm;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  search() {
    const query = this.searchForm.value.query;

    return this.route.navigate(['/movies/search'], {queryParams: {search: query}});
  }
}
