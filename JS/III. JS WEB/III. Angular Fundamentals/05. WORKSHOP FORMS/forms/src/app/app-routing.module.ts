import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateDrivenFormComponent} from "./template-driven-form/template-driven-form.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'register/templateDriven'},
  {path: 'register/templateDriven', component: TemplateDrivenFormComponent},
  {path: 'register/reactive', component: ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
