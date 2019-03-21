import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestjsonService {
  bairro: String;
  constructor(private http:HttpClient) { }


  test(){
    this.http.get('viacep.com.br/ws/01001000/json/').subscribe(
      (res: any)=>{
        this.bairro = res.bairro;
       console.log(this.bairro);

      }
    )
  }
}
