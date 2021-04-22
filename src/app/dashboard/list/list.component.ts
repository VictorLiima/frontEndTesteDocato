import { Component, OnInit } from '@angular/core';
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
  constructor(private dashboardService: DashboardService) {
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

    // if (this.usuarios){
    //   this.usuarios.sort((a, b) => {
    //     return +a.id - +b.id;
    //   });
  }

}
