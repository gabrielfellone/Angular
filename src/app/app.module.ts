import { CepModule } from './pages/cep/cep.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LazyModule } from './Static/lazy/lazy.module';

import { FormatPipe } from './format.pipe';
import { HighlightDirective } from './highlight.directive';
import { NavbarComponent } from './Static/navbar/navbar.component';
import { Rota1Component } from './pages/rota1/rota1.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { FilhoComponent } from './filho/filho.component';



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
    NavbarComponent,
    Rota1Component,
    FormatPipe,
    HighlightDirective,
    HomeComponent,
    FilhoComponent


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
    LazyModule,
    CepModule,
    ReactiveFormsModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
