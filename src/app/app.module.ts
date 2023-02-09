import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {CreateColleagueModule} from "./pages/create-colleague/create-colleague.module";
import {HttpClientModule} from "@angular/common/http";
import {ROUTES} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu-component/menu.component';
import {WelcomeModule} from "./pages/welcome/welcome.module";
import {ColleagueModule} from "./pages/colleague/colleague.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
    imports: [
      BrowserModule,
      NgbModule,
      SharedModule,
      CreateColleagueModule,
      HttpClientModule,
      RouterModule.forRoot(ROUTES),
      AppRoutingModule,
      WelcomeModule,
      ColleagueModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
