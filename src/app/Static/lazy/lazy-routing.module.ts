import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from 'src/app/pages/home/home/home.component';

const routes: Routes = [

  {
    path: '', component: ErrorComponent
  },
  {
    path: 'error', component: ErrorComponent
  },

  {
    path: 'aaa', loadChildren: 'src/app/pages/home/home.module#HomeModule'
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
