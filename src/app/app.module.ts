import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TreinComponent } from './trein/trein.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Rota1Component } from './rota1/rota1.component';
import { Rota2Component } from './rota2/rota2.component';
import { TestemoduloModule } from './testemodulo/testemodulo.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-root',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TreinComponent,
    NavbarComponent,
    Rota1Component,
    Rota2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    TestemoduloModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
