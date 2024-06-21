import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStore } from './store/user-store';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserStore
  ]
})
export class CoreModule { }
