import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {ColleagueApi} from "../../../models/colleague-api";

@Component({
  selector: 'tc-colleague-details',
  templateUrl: './colleague-details.component.html',
  styleUrls: ['./colleague-details.component.scss']
})
export class ColleagueDetailsComponent {

  @Input() colleague!: ColleagueApi;
}
