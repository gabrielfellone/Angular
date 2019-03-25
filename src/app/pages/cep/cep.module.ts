import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CepRoutingModule } from './cep-routing.module';
import { CepComponent } from './cep/cep.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CepComponent],
  imports: [
    CommonModule,
    CepRoutingModule,
    FormsModule
  ]
})
export class CepModule { }
