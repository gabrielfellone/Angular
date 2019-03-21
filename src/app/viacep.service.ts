import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  constructor(private http:HttpClient) { }
  chamada(varcep) {
    return this.http.get('https://viacep.com.br/ws/'+varcep+'/json/')

  }

}
