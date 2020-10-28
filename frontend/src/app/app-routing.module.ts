import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { NewListComponent } from './components/new-list/new-list.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "lists",
    pathMatch: "full"
  },
  {
    path: "lists",
    component: DashboardComponent,
  },
  {
    path: "list/:listId",
    component: DashboardComponent,
  },
  {
    path: "list/:listId/new-task",
    component: NewTaskComponent,
  },
  {
    path: "lists/new-list",
    component: NewListComponent,
  },
  {
    path: "edit-list/:listId",
    component: EditListComponent,
  },
  {
    path: "edit-task/:taskId",
    component: EditTaskComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
