import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ProdutosComponent } from './produtos/produtos.component';

const demandRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'editar/:id', component: FormComponent },
  { path: 'novo', component: FormComponent },
  { path: 'listar', component: ListComponent },
  { path: 'produtos', component: ProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(demandRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
