import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { PostService } from '../../../core/services/post.service';
import {PostInfo} from '../../shared/models/Post-Info';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  allPosts$: Observable<PostInfo[]>;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const segmentArr = this.route.snapshot.url;
    const segment = segmentArr[0];
    if (!segment) {
      this.allPosts$ = this.postService.getAll();
    } else {
      this.allPosts$ = this.postService.getUserPosts();
    }
  }
}
