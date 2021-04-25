import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

// import { takeUntil} from 'rxjs/operators';
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public usuarios: any;
  public searchText: string = '';
  public currentPage: number = 0;
  public totalRecords: number = 0;
  constructor(
    public router: Router,
    private dashboardService: DashboardService
  ) {
    this.getUsuarios();
  }

  ngOnInit(): void {}

  async getUsuarios() {
    this.usuarios = await this.dashboardService
      .getUsuarios(this.currentPage)
      .then((usuariosRetorno) => {
        this.totalRecords = usuariosRetorno.total;
        return usuariosRetorno.usuarios;
      })
      .catch((error) => {
        console.log('Erro ao consultar Usuarios:', error);
      });
  }

  async getUsuario() {
    this.usuarios = await this.dashboardService
      .getUsuarios(this.currentPage, this.searchText)
      .then((usuariosRetorno) => {
        this.totalRecords = usuariosRetorno.total;
        return usuariosRetorno.usuarios;
      })
      .catch((error) => {
        console.log('Erro ao consultar Usuarios:', error);
      });
  }

  deleteUser(id: string) {
    this.dashboardService.deleteUsuario(id).subscribe(
      () => {
        alert('Usuário excluído com sucesso');
        this.getUsuarios();
      },
      (error) => {
        alert('Erro ao deletar usuário');
      }
    );
  }
  goToUpdate(id: string | number) {
    this.router.navigate(['dashboard/editar', id]);
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

  goToCadastroUsuario() {
    this.router.navigate(['dashboard/novo']);
  }

  changeText(ev: any) {
    this.searchText = ev.target.value || '';
  }

  nextPage() {
    if (this.totalRecords >= (this.currentPage + 1) * 10) {
      this.currentPage += 1;
      this.getUsuarios();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      this.getUsuarios();
    }
  }
}
