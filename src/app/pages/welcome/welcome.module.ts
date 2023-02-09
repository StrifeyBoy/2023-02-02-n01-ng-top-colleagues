import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePage } from '../welcome/welcome.page';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    WelcomePage
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WelcomeModule { }
