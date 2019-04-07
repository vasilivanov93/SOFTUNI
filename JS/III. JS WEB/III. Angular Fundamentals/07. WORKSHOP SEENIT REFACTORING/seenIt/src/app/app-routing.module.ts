import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import {AuthGuard} from './core/guards/auth.guard';
import {AnonymousGuard} from './core/guards/anonymous.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login', canActivate: [AnonymousGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AnonymousGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AnonymousGuard] },
  { path: 'posts', loadChildren: './components/post/post.module#PostModule', canLoad: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
