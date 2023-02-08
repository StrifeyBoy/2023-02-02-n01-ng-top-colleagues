import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {Vote} from "../../../models/vote";
import {VoteService} from "../../../providers/vote.service";
import {LikeHate} from "../../../models/like-hate";
import {VoteApi} from "../../../models/vote-api";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  votes: VoteApi[] = [];

  constructor(private voteService: VoteService) {
    this.voteService.list()
      .subscribe(votesTab => this.votes = votesTab)
  }

  deleteFromList(vote: VoteApi) {
    this.votes.splice(this.votes.indexOf(vote), 1);
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
