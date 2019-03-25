import { CepComponent } from './cep/cep.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cep', component: CepComponent
  },
  {
    path: '', component: CepComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CepRoutingModule { }
