import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { EmpComponent } from './emp/emp.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "", component: LayoutComponent, canActivate:[AuthGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'location', component: LocationComponent },
      { path: 'parent', component: ParentComponent },
      { path: 'reactive', component: ReactiveComponent },
      {path: 'emp', component: EmpComponent},
      {path: 'productlist', component: ProductlistComponent},
      {path: 'productlist/:id', component: ProductDetailComponent},
      { path: 'template-form', component: TemplateFormComponent }      
    ]
  },
  {
    path: 'student',  loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  { path: '**', redirectTo:'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
