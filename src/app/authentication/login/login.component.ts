import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: any;
  mensagem = '';
  emailDB = '';
  senhaDB = '';

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.criarForm();
  }

  criarForm() {
    this.form = this.formBuilder.group({
      email: [''],

      senha: [''],
    });
  }

  login() {
    this.mensagem = 'Login feito com sucesso!';

    this.authenticationService
      .login(this.form.get('email').value, this.form.get('senha').value)
      .subscribe(
        () => {
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          alert('Usuário ou senha inválido');
        }
      );
  }
}
