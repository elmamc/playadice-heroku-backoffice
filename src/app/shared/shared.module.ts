import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
  ],
  exports: [
    ToolbarComponent,
  ]
})
export class SharedModule { }
