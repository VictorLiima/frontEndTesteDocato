import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public formUser: any;

  constructor(
    private dashboardService: DashboardService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.criarFormInsert();

    if (this.activatedRoute.snapshot.params.id) {
      this.dashboardService
        .getUsuario(this.activatedRoute.snapshot.params.id)
        .subscribe(
          (res) => {
            this.criarFormUpdate(res);
          },
          (error) => {
            this.criarFormInsert();
            alert('Usuário ou senha inválido');
          }
        );
    } else {
      this.criarFormInsert();
    }
  }

  ngOnInit(): void {}

  submitForm() {
    if (this.activatedRoute.snapshot.params.id) {
      this.dashboardService
        .updateUsuario(
          this.formUser.value,
          this.activatedRoute.snapshot.params.id
        )
        .subscribe(
          () => {
            alert('Usuário atualizado com sucesso');
            this.router.navigate(['/dashboard/listar']);
          },
          (error) => {
            console.log('erro');
            alert('Erro ao atualizar o usuário');
          }
        );
    } else {
      this.dashboardService.insertUsuario(this.formUser.value).subscribe(
        () => {
          alert('Usuário inserido com sucesso');
          this.router.navigate(['/dashboard/list']);
        },
        (error) => {
          console.log('erro');
          alert('Erro ao cadastrar o usuário');
        }
      );
    }
  }

  criarFormInsert() {
    this.formUser = this.formBuilder.group({
      nome: [''],
      email: [''],
      senha: [''],
      cpf: [''],
      nomeDeUsuario: [''],
    });
  }

  criarFormUpdate(user: User) {
    this.formUser = this.formBuilder.group({
      nome: [user.nome],
      email: [user.email],
      senha: [user.senha],
      cpf: [user.cpf],
      nomeDeUsuario: [user.nomeDeUsuario],
    });
  }

  goToListaUsuario() {
    this.router.navigate(['dashboard/listar']);
  }
  goToDashboard() {
    this.router.navigate(['dashboard']);
  }
}
