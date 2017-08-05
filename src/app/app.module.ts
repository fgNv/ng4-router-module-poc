import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from "app/app.routing";
import { PeopleModule } from "app/people/people.module";
import { TodosModule } from "app/todos/todos.module";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "app/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    routing,
    BrowserModule,
    PeopleModule,
    TodosModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
