import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public usuarios:any;
  constructor(public router: Router, private dashboardService: DashboardService) {
    this.buscarUsuarios();
   }
  ngOnInit(): void {
  }

  async buscarUsuarios(){
    this.usuarios = await this.dashboardService.getUsuarios().then(usuariosRetorno => {
      return usuariosRetorno
    }).catch(error => {
      console.log('Erro ao consultar Usuarios:', error);
    })
    console.log(this.usuarios);
  }

  goToUpdate(id: string | number){
    this.router.navigate(['dashboard/editar', id]);
  }

  deleteUser(id: string){
    this.dashboardService.deleteUsuario(id).subscribe(()=>{
        alert('Usuário excluído com sucesso');
        this.buscarUsuarios();
    },
    error=>{
        console.log('erro');
        alert('Erro ao deletar usuário')
    })
   }
  
   insertUser(){
    this.router.navigate(['dashboard/novo']);
   }

}
