import { Component } from '@angular/core';
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  constructor(private colleagueService: ColleagueService) {
  }
/*  newColleagueForm = new newColleagueForm();
  submit() {
    console.log(this.newColleagueForm);
    this.colleagueService.createColleague(this.newColleagueForm)
      .subscribe(data => console.log(data))

  } */
}
