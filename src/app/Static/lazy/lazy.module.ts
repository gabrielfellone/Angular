import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
  ErrorComponent
  ],

  imports: [
    CommonModule,
    LazyRoutingModule
  ],
})
export class LazyModule { }
