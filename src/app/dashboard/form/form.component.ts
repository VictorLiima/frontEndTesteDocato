import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formUser : any;

  constructor(private dashboardService: DashboardService, private activatedRoute: ActivatedRoute, public router: Router, private formBuilder:FormBuilder,) {     
    
    this.criarFormInsert();
    
    if (this.activatedRoute.snapshot.params.id) { 
      this.dashboardService.getUsuario(this.activatedRoute.snapshot.params.id).subscribe((r)=>{
      console.log(r);
      this.criarFormUpdate(r);
    },
      error=>{
          console.log('erro');
          this.criarFormInsert();        
          alert('Usuário ou senha inválido');
        
      });
      console.log(this.activatedRoute.snapshot.params.id)
    } else {
      console.log('mamei inserindo')
      this.criarFormInsert();
    }
  }

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.formUser.value);
    if (this.activatedRoute.snapshot.params.id) {
        this.dashboardService.updateUsuario(this.formUser.value, this.activatedRoute.snapshot.params.id).subscribe(()=>{
        alert('Usuário atualizado com sucesso')
          this.router.navigate(['/dashboard/list']);
    },
    error=>{
        console.log('erro');
        alert('Erro ao atualizar o usuário')
    });  
    } else{
      this.dashboardService.insertUsuario(this.formUser.value).subscribe(()=>{
        alert('Usuário inserido com sucesso')
          this.router.navigate(['/dashboard/list']);
    },
    error=>{
        console.log('erro');
        alert('Erro ao cadastrar o usuário')
    });
    }
  }

  criarFormInsert(){
    this.formUser = this.formBuilder.group({

        nome: [''],
        email: [''],
        senha: [''],
        cpf: [''],
        nomeDeUsuario: [''],

    });
  }

  criarFormUpdate(user:User){
    this.formUser = this.formBuilder.group({
        nome: [user.nome],
        email: [user.email],
        senha: [user.senha],
        cpf: [user.cpf],
        nomeDeUsuario: [user.nomeDeUsuario],
    });
  }

  goToDashboard(){
    this.router.navigate(['dashboard']);
  }

}
