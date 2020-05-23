import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomepageComponent} from './homepage/homepage.component'
import {RegistrationComponent} from './registration/registration.component';
const routes: Routes = [
  { path: 'login-component', component: LoginComponent },
  { path: 'registration-component', component: RegistrationComponent },
  { path: 'homepage-component', component: HomepageComponent },
  { path: '',   redirectTo: '/registration-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
