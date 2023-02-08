import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {Vote} from "../../../models/vote";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
@Input() colleague: Colleague = {
  pseudo: "",
  score: 0,
  photo: ""

}
  @Output() vote = new EventEmitter<Vote>();
  likeButtonDisabled = false;
  hateButtonDisabled = false;

  updateScore(likeHate: LikeHate){
    switch (likeHate) {
      case LikeHate.LIKE:
        this.colleague.score ++;
        break;

      case LikeHate.HATE:
        this.colleague.score --;
        break;
    }

    this.vote.emit({
      colleague: this.colleague,
      likeHate: likeHate

    })

    this.likeHateOff();
  }

  private likeHateOff() {
    this.likeButtonDisabled = this.colleague.score >= 1000;
    this.hateButtonDisabled = this.colleague.score <= -1000;
  }

}
