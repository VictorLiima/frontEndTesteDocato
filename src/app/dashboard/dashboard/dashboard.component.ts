import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public usuarios: any;
  public searchText: string = '';

  constructor(
    public router: Router,
    private dashboardService: DashboardService
  ) {
    this.getUsuario();
  }
  ngOnInit(): void {}

  async getUsuario() {
    this.usuarios = await this.dashboardService
      .getUsuarios(this.searchText)
      .then((usuariosRetorno) => {
        return usuariosRetorno;
      })
      .catch((error) => {
        console.log('Erro ao consultar Usuarios:', error);
      });
  }

  goToUpdate(id: string | number) {
    this.router.navigate(['dashboard/editar', id]);
  }

  deleteUser(id: string) {
    this.dashboardService.deleteUsuario(id).subscribe(
      () => {
        alert('Usuário excluído com sucesso');
        this.getUsuario();
      },
      (error) => {
        alert('Erro ao deletar usuário');
      }
    );
  }

  insertUser() {
    this.router.navigate(['dashboard/novo']);
  }

  changeText(ev: any) {
    this.searchText = ev.target.value || '';
  }
}
