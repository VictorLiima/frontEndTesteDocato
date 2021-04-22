import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';

const appRoutes: Routes = [
  { path: 'login', loadChildren: () => AuthenticationModule },
  { path: 'dashboard', loadChildren: () => DashboardModule }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
