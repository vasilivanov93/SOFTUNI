import {Component, Input, OnInit} from '@angular/core';
import {PostInfo} from '../../shared/models/Post-Info';
import {PostService} from '../../../core/services/post.service';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  @Input() post: PostInfo;
  @Input() rank: number;
  @Input() desc: string;
  allPosts$: Observable<PostInfo[]>;

  constructor(private postService: PostService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe((segmentArr: UrlSegment[]) => {
      if (segmentArr.length === 1) {
        this.allPosts$ = this.postService.getAll();
      } else {
        this.allPosts$ = this.postService.getUserPosts();
      }
    });
  }

  isAuthor(post: Object) {
    return post['_acl']['creator'] === localStorage.getItem('userId');
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.allPosts$ = this.postService.getAll();
      });
  }
}
