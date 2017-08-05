import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "app/app.component";
import { HomeComponent } from "app/home/home.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  { path: 'people', loadChildren: 'app/people/people.module#PeopleModule' },
  { path: 'todos', loadChildren: 'app/todos/todos.module#TodosModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
