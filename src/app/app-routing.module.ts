import { CepComponent } from './pages/cep/cep/cep.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './Static/lazy/error/error.component';
import { HomeComponent } from './pages/home/home/home.component';


const routes: Routes = [

  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cep', component: CepComponent
  },
  {
    path: '', redirectTo: 'home',pathMatch:'full'
  },
  {
    path: 'lazy', loadChildren: './Static/lazy/lazy.module#LazyModule'
  },


  {
    path: 'error', component: ErrorComponent
  },

  { //deixar por ultimo sempre
    path: '**', redirectTo: 'error'
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
