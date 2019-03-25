import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formulario2: FormGroup;

  constructor(private formbuilder:FormBuilder) {

  }

  ngOnInit() {
    this.formulario2 = this.formbuilder.group({
      nome:["Gabriel", Validators.compose([Validators.required,Validators.pattern("Gabriel")])],
      sobrenome:["Fellone"],
      idade:[23],
      });
      console.log(this.formulario2);

  }

  submitMethod(formulario: NgForm){
    console.log(formulario);
  }

  setSubmit(){
  console.log(this.formulario2);
  console.log(this.formulario2.get("nome"));

  }

  funcaoClasse(nome){
    return {
      'valido': !this.formulario2.get(nome).errors && !this.formulario2.get(nome).untouched,
      'invalido': this.formulario2.get(nome).errors && !this.formulario2.get(nome).untouched


    }


  }
  funcaoVerifica(verifica){
      return{

       'test': !this.formulario2.get('nome').errors && this.formulario2.get('nome').errors.pattern.actualValue
      }

  }

}

