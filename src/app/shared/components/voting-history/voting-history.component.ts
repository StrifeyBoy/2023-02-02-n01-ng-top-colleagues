import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {Vote} from "../../../models/vote";
import {VoteService} from "../../../providers/vote.service";
import {LikeHate} from "../../../models/like-hate";

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
  @Input() votes: Vote[] = [];
  LikeHate = LikeHate;

  constructor(private voteService: VoteService) {
    this.votes = this.voteService.getVotes();
    this.voteService.voteObs().subscribe(
      ()=> this.votes = this.voteService.getVotes()
    )
  }

  deleteFromList(vote: Vote) {
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
