import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { PostEditComponent } from './components/post/post-edit/post-edit.component';
import { PostDetailsComponent } from './components/post/post-details/post-details.component';
import { PostInfoComponent } from './components/post/post-info/post-info.component';
import { CommentInfoComponent } from './components/comment/comment-info/comment-info.component';
import { CommentCreateComponent } from './components/comment/comment-create/comment-create.component';
import {TokenInterceptor} from './core/interceptors/token.interceptor';
import {ErrorInterceptor} from './core/interceptors/error.interceptor';
import {SharedModule} from './components/shared/shared.module';
import {AuthenticationModule} from './components/authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCreateComponent,
    PostEditComponent,
    PostDetailsComponent,
    PostInfoComponent,
    CommentInfoComponent,
    CommentCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,
    AuthenticationModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
