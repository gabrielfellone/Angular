import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViacepService } from './viacep.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  mostrar=false;
  nome="1";
  lista:Array<string>;
  list2:string[];
  lista3=[1,2,3,4];

  icep;
  pipecep1;

  test1='test2';


  novaTabela = document.createElement('table');


  //injecao de dependencia
  constructor(private http:HttpClient,
  private viacep: ViacepService,private router:Router ){}


  show(){
    this.mostrar = !this.mostrar;
  }

  ngOnInit() {

  }

onSubmit(){

}

showAll(){

}

testOutput(tout){

console.log(tout);




}


}
