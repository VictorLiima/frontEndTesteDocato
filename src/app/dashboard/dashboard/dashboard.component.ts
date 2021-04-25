import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public produtos: any;
  public searchText: string = '';

  constructor(
    public router: Router,
    private dashboardService: DashboardService,
    private authenticationService: AuthenticationService
  ) {}
  ngOnInit(): void {}

  async getProdutos() {
    this.produtos = await this.dashboardService
      .getProdutos()
      .then((produtosRetorno) => {
        return produtosRetorno;
      })
      .catch((error) => {
        console.log('Erro ao consultar Produtos:', error);
      });
  }

  goToUpdate(id: string | number) {
    this.router.navigate(['dashboard/editar', id]);
  }

  goToListar() {
    this.router.navigate(['dashboard/listar']);
  }

  goToProdutos() {
    this.router.navigate(['dashboard/produtos']);
  }

  goToDashboard() {
    this.router.navigate(['dashboard']);
  }

  goToCadastroUsuario() {
    this.router.navigate(['dashboard/novo']);
  }

  insertUser() {
    this.router.navigate(['dashboard/novo']);
  }

  changeText(ev: any) {
    this.searchText = ev.target.value || '';
  }

  logout() {
    this.authenticationService.logout();
  }
}
