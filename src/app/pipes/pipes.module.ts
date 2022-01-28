import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {CamelCasePipe} from "./change-string/camel-case.pipe";

@NgModule({

  declarations: [
    CamelCasePipe
  ],

  imports: [
    CommonModule
  ],

  exports: [
    CamelCasePipe
  ]

})
export class PipesModule { }
