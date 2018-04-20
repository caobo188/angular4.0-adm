import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {appRouter} from './app.router';


import { AppComponent } from './app.component';
import { BillListComponent } from './bill/list.component';

@NgModule({
  declarations: [
    AppComponent,
    BillListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
