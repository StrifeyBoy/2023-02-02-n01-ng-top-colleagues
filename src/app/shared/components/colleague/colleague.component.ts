import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";

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

//@Output() output = new EventEmitter<Colleague>();

}
  likeButtonDisabled = false;
  hateButtonDisabled = false;
  updateScore(likeHate: LikeHate){
   switch (likeHate){
     case LikeHate.LIKE:
       this.colleague.score ++;
       break;

     case LikeHate.HATE:
       this.colleague.score --;
       break;
   }
 this.likeHateOff();
  }

  private likeHateOff() {

  }
}

function likeHateOff(this: any) {


  this.likeButtonDisabled = this.colleague.score >= 1000;
  this.hateButtonDisabled = this.colleague.score <= -1000;
}



