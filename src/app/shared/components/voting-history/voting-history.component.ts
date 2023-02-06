import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";


@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  @Input() colleague: Colleague = {
    pseudo: "",
    score: 0,
    photo: ""
  }

  /*history (){
  private placeholder: string;
  if (score > 0) {
    placeholder = "aimé(e)";
  else
    if (score <= 0) {
      placeholder = "détesté(e)"
    }
  }*/
}
