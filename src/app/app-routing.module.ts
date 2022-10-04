import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home', component: MainComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  { path: 'transactions', component: TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
