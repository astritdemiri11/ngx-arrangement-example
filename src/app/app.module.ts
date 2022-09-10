import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArrangementModule } from 'ngx-arrangement';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ArrangementModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
