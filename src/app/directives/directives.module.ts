import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { WhiteDirective } from "./change-color/white.directive";

@NgModule({
  declarations: [
    WhiteDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WhiteDirective
  ]
})
export class DirectivesModule { }
