import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste/teste.component';
import { TesteModule } from './testemodule.routing.module';
import { Teste3Component } from './teste3/teste3.component';



@NgModule({
  declarations: [TesteComponent, Teste3Component],
  imports: [
    CommonModule,
    TesteModule


  ],
  exports:[
    TesteComponent
  ]
})
export class TestemoduloModule {

 }
