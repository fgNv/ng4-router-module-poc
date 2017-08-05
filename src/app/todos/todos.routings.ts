
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodosComponent } from "app/todos/todos.component";
import { TodosListComponent } from "app/todos/list/todos-list.component";

const todosRoutes: Routes = [
  {
    path: 'todos',
    component: TodosComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: TodosListComponent },
    ]
  }
];

export const todosRouting: ModuleWithProviders = RouterModule.forChild(todosRoutes);
