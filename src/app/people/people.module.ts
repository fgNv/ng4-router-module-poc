import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PeopleComponent } from "app/people/people.component";
import { PeopleListComponent } from "app/people/list/people-list.component";
import { RouterModule } from "@angular/router";
import { peopleRouting } from "app/people/people.routing";

@NgModule({
  declarations: [
    PeopleComponent,
    PeopleListComponent
  ],
  imports: [
    peopleRouting,
    RouterModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class PeopleModule { }
