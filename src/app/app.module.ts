import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {CreateColleagueModule} from "./pages/create-colleague/create-colleague.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      NgbModule,
      SharedModule,
      CreateColleagueModule,
      HttpClientModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
