import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'login', loadChildren: 'authentication/authentication.module#AuthenticationModule' },
  { path: 'dashboard', loadChildren: 'dashboard/dashboard.module#DashboardModule'}]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
