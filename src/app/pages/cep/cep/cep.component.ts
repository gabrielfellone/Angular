import { Component, OnInit } from '@angular/core';
import { ViacepService } from 'src/app/viacep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {



  icep;
  cep: string[];
  logradouro: string[];
  bairro: string[];
  localidade: string[];
  uf: string[];




  constructor(private viacep: ViacepService) { }

  ngOnInit() {
  }



  onSubmit(){
    this.viacep.chamada(this.icep).subscribe(
      (res: any)=>{



        this.bairro = res.bairro;
        console.log(this.bairro);

        this.cep = res.cep;
        console.log(this.cep);

        this.localidade = res.localidade;
        console.log(this.localidade);

        this.uf = res.uf;
        console.log(this.uf);



      }
    )
  }




}
