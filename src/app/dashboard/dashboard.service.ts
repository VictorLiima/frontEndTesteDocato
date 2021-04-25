import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  public apiURL = 'localhost:3000';
  constructor(private http: HttpClient, private router: Router) {}

  getUsuarios(page: number, searchText: string = '') {
    const url = `http://${this.apiURL}/usuarios?${`page=${page}`}${
      searchText === '' ? '' : `&searchText=${searchText}`
    }`;

    return this.http.get<any>(url).toPromise();
  }

  public getUsuario(id: string) {
    //buscando url do servidor no localstorage
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', token || '');

    return this.http
      .get('http://' + this.apiURL + '/usuario/' + id, { headers: headers })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  public updateUsuario(user: User, id: string) {
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', token || '');

    return this.http
      .put('http://' + this.apiURL + '/usuario/' + id, user, {
        headers: headers,
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  public insertUsuario(user: User) {
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', token || '');

    return this.http
      .post('http://' + this.apiURL + '/usuario/cadastro', user, {
        headers: headers,
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  public deleteUsuario(id: string) {
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', token || '');

    return this.http
      .delete('http://' + this.apiURL + '/usuario/' + id, { headers: headers })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  public getProdutos() {
    //buscando url do servidor no localstorage
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', token || '');

    return this.http
      .get('http://' + this.apiURL + '/docato/produtos', { headers: headers })
      .pipe(
        map((response: any) => {
          return response;
        })
      )
      .toPromise();
  }

  goToCadastroUsuario() {
    this.router.navigate(['dashboard/novo']);
  }
}
