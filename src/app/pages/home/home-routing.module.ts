import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CepComponent } from '../cep/cep/cep.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'aaa', component: HomeComponent
  },

  {
   path: 'cep', loadChildren: '../cep/cep.module#CepModule'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
