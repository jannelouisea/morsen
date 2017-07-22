import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel lives here

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule here so it can be used throughout the application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
