import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodosComponent } from "app/todos/todos.component";
import { TodosListComponent } from "app/todos/list/todos-list.component";
import { RouterModule } from "@angular/router";
import { todosRouting } from "app/todos/todos.routings";


@NgModule({
  declarations: [
    TodosComponent,
    TodosListComponent
  ],
  imports: [
    todosRouting,
    RouterModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class TodosModule { }
