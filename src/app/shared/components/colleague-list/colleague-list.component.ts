import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHateComponent} from "../like-hate/like-hate.component";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {


  colleagues: Colleague[] = this.colleagueService.list();

  constructor(private colleagueService: ColleagueService) {
  }

}
