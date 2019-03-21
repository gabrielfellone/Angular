import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestjsonService } from './testjson.service';
import { ViacepService } from './viacep.service';




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

  cep;
  logradouro;
  complemento;
  bairro;
  localidad;
  uf;




  constructor(private cepjson: TestjsonService,private http:HttpClient,private viacep: ViacepService){}

  show(){
    this.mostrar = !this.mostrar;
  }

  ngOnInit() {


  }

onSubmit(){
  this.viacep.chamada(this.icep).subscribe(
    (res: any)=>{
      this.bairro = res.bairro;
      console.log(this.bairro);
      this.cep = res.cep;
      console.log(this.cep);
      this.logradouro = res.logradouro;
      console.log(this.logradouro);
      this.uf = res.uf;
      console.log(this.uf);
    }
  )
}



}
