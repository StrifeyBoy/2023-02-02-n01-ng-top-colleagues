import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {Vote} from "../../../models/vote";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {
  @Input() colleague: Colleague = {
  pseudo: "",
  score: 0,
  photo: ""

}
  @Output() vote = new EventEmitter<Vote>();
  likeButtonDisabled = false;
  hateButtonDisabled = false;

  constructor(
    private voteService: VoteService
  ) {
  }

  ngOnInit() {
    this.likeHateOff();
  }

  updateScore(likeHate: LikeHate){
    this.voteService.vote(this.colleague.pseudo, likeHate)
      .subscribe(
        colleague => {
          this.colleague.score = colleague.score
          this.likeHateOff();
        }) ;
  }

  private likeHateOff() {
    this.likeButtonDisabled = this.colleague.score >= 1000;
    this.hateButtonDisabled = this.colleague.score <= -1000;
  }

}
