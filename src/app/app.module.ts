import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //necessary for data binding to forms

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //needed for above reference
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
