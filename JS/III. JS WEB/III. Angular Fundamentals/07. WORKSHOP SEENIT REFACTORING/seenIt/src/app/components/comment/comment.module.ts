import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { CommentInfoComponent } from './comment-info/comment-info.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    CommentInfoComponent,
    CommentCreateComponent
  ],
  exports: [
    CommentInfoComponent,
    CommentCreateComponent
  ]
})

export class CommentModule { }
