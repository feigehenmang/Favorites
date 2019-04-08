import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './basic/button/button.component';

const baseComponent = [ButtonComponent];


@NgModule({
  declarations: [...baseComponent],
  imports: [
    CommonModule
  ],
	exports: [...baseComponent]
})
export class BaseModule { }
