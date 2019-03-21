import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Rota1Component } from './rota1/rota1.component';
import { Rota2Component } from './rota2/rota2.component';

const routes: Routes = [

  {
    path: 'rota1', component: Rota1Component
  },
  {
    path : 'rota2', component: Rota2Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
