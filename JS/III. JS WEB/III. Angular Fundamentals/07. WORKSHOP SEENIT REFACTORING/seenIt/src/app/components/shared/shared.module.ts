import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

// Services
import { CommentService } from '../../core/services/comment.service';
import { PostService } from '../../core/services/post.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ]
})

export class SharedModule { }
