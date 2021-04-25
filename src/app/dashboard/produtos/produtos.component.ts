import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  public produtos: any;
  public searchText: any;
  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.getProdutos();
  }

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

  goToContratar() {
    console.log('to aqui');
  }

  goToDashboard() {
    this.router.navigate(['dashboard']);
  }

  goToListar() {
    this.router.navigate(['dashboard/listar']);
  }

  goToProdutos() {
    this.router.navigate(['dashboard/produtos']);
  }

  changeText(ev: any) {
    this.searchText = ev.target.value || '';
  }
}
