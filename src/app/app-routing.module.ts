import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { BootstrapGridComponent } from './bootstrap-grid/bootstrap-grid.component';
import { CalculationComponent } from './calculation/calculation.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LandingComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'calculation', component: CalculationComponent },
      { path: 'post', component: PostComponent },
      { path: 'table', component: TableComponent },
      { path: 'grid', component: BootstrapGridComponent },
    ]
  },
  { path: '**', redirectTo: 'login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
