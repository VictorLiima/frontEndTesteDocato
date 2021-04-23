import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

// import { takeUntil} from 'rxjs/operators';
// import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  public usuarios:any;
  constructor(public router: Router, private dashboardService: DashboardService) {
    this.buscarUsuarios();
   }

  ngOnInit(): void {
    console.log(this.usuarios);
  }

  async buscarUsuarios(){
    this.usuarios = await this.dashboardService.getUsuarios().then(usuariosRetorno => {
      return usuariosRetorno
    }).catch(error => {
      console.log('Erro ao consultar Usuarios:', error);
    })
    console.log(this.usuarios);
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

  goToUpdate(id: string | number){
    this.router.navigate(['dashboard/editar', id]);
  }

  goToDashboard(){
    this.router.navigate(['dashboard']);
  }

}
