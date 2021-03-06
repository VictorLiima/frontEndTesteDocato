import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public apiURL = 'localhost:3000';
  constructor(private http: HttpClient, private router: Router) {}

  public login(eMail: string, password: string) {
    //buscando url do servidor no localstorage

    const autenticacao = {
      email: eMail,
      senha: password,
    };
    return this.http
      .post('http://' + this.apiURL + '/login', autenticacao)
      .pipe(
        map((response: any) => {
          if (response) {
            localStorage.setItem('Token', response.token);
          }
        })
      );
  }

  async logout() {
    localStorage.removeItem('Token');
    this.router.navigate(['/login']);
  }
}
