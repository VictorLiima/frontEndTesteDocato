import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public  apiURL = 'localhost:3000'
  constructor(private http : HttpClient) { }

  // async login(email:string, senha:string){
  //   console.log(email, senha);

  //   return this.http.post<any>('http://'+this.apiURL+'/login').toPromise();
  // }

  public login(eMail: string, password: string)  {
    //buscando url do servidor no localstorage

       const autenticacao = {
          "email": eMail,
            "senha": password
        }
            return this.http.post('http://'+this.apiURL+'/login', autenticacao).pipe(
              map((response:any)=>{
                console.log(response);
                if(response){
                  localStorage.setItem('Token', response.token);
                }
              })
            );
   }

  async logout(){
    
  }
}
