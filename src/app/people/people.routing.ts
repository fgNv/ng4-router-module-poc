
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PeopleComponent } from "app/people/people.component";
import { PeopleListComponent } from "app/people/list/people-list.component";

const peopleRoutes: Routes = [
  {
    path: 'people',
    component: PeopleComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: PeopleListComponent },
    ]
  }
];

export const peopleRouting: ModuleWithProviders = RouterModule.forChild(peopleRoutes);
