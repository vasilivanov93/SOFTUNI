import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app-routing.module';
import {HttpClientModule} from '@angular/common/http';

// Components
import {PostCreateComponent} from './post-create/post-create.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {PostEditComponent} from './post-edit/post-edit.component';
import {PostInfoComponent} from './post-info/post-info.component';
import {PostListComponent} from './post-list/post-list.component';
import {CommentModule} from '../comment/comment.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommentModule,
  ],
  declarations: [
    PostCreateComponent,
    PostDetailsComponent,
    PostEditComponent,
    PostInfoComponent,
    PostListComponent
  ],
  exports: [
    PostCreateComponent,
    PostDetailsComponent,
    PostEditComponent,
    PostInfoComponent,
    PostListComponent
  ]
})

export class PostModule {
}
