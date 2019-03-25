import { TestemoduloModule } from './testemodulo.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteComponent } from './teste/teste.component';
import { Teste3Component } from './teste3/teste3.component';



const routes: Routes = [


  {
    path : '', component: TesteComponent
  },

  {
    path : 'rota1', component: Teste3Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteModule { }
