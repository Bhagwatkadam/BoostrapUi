import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from '../student-list/student-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
        {path:'', redirectTo:'student-list'},
        {path:'student-list', component: StudentListComponent}
    ]
  },
  {path:'**',  redirectTo:'student-list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
