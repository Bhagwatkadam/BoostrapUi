import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ChildDataComponent } from './child-data/child-data.component';
import { SmallDataComponent } from './small-data/small-data.component';
import { NavComponent } from './nav/nav.component';
import { LayoutComponent } from './layout/layout.component';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ParentComponent } from './parent/parent.component';
import { SetBlueDirective } from './set-blue.directive';
import { RedcolorDirective } from './redcolor.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { CounterComponent } from './counter/counter.component';
import { EmpComponent } from './emp/emp.component';
import { SearchPipe } from './search.pipe';
// import { MypipePipe } from './mypipe.pipe';

// import { StoreModule } from '@ngrx/store';
// import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    ChildDataComponent,
    SmallDataComponent,
    NavComponent,
    LayoutComponent,
    LocationComponent,
    HomeComponent,
    ContactComponent,
    ParentComponent,
    SetBlueDirective,
    RedcolorDirective,
    ReactiveComponent,
    TemplateFormComponent,
    CounterComponent,
    EmpComponent,
    SearchPipe,
    
    // MypipePipe
  ],
  imports: [
    // StoreModule.forRoot({ count: counterReducer }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
