import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateColleagueModule} from "./pages/create-colleague/create-colleague.module";
import {WelcomePage} from "./pages/welcome/welcome.page";
import {CreateColleaguePage} from "./pages/create-colleague/create-colleague.page";
import {ColleaguePage} from "./pages/colleague/colleague.page";

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: WelcomePage},
  { path: 'create-colleague', component: CreateColleaguePage},
  { path: 'colleague/:pseudo', component: ColleaguePage}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
