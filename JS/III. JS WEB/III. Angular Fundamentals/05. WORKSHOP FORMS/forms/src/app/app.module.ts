import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CheckPasswordDirective } from './directives/check-password.directive';
import { ImageDirective } from './directives/image.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    CheckPasswordDirective,
    ImageDirective,
    ReactiveFormComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
