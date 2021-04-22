import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public  apiURL = 'localhost:3000'
  constructor(private http : HttpClient) { }

  getUsuarios(){
    return this.http.get<any>('http://'+this.apiURL+'/usuarios').toPromise();
  }
  
}
