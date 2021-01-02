import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { WarningAlert } from "./warningAlert/warningAlert.component"
import { SuccessAlert } from "./successAlert/successAlert.component";
import { DatabindingPractice } from './databinding-practice.component/databinding-practice.component';
import { from } from 'rxjs';
import { BuiltinDirectives } from "./builtin-directieves/builtin-directieves.component"

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlert,
    WarningAlert,
    DatabindingPractice,
    BuiltinDirectives
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
