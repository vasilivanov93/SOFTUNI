import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

// Components
import {PostCreateComponent} from './post-create/post-create.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {PostEditComponent} from './post-edit/post-edit.component';
import {PostInfoComponent} from './post-info/post-info.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostRoutingModule} from './post-routing.module';
import {CommentInfoComponent} from '../comment/comment-info/comment-info.component';
import {CommentCreateComponent} from '../comment/comment-create/comment-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PostRoutingModule
  ],
  declarations: [
    PostCreateComponent,
    PostDetailsComponent,
    PostEditComponent,
    PostInfoComponent,
    PostListComponent,
    CommentInfoComponent,
    CommentCreateComponent
  ]
})

export class PostModule {
}
