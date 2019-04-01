import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import {FormsModule} from "@angular/forms";
import { CheckPasswordDirective } from './directives/check-password.directive';
import { ImageDirective } from './directives/image.directive';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    CheckPasswordDirective,
    ImageDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
