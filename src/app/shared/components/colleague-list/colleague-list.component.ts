import {Component, EventEmitter, Output} from '@angular/core';
import {ColleagueService} from "../../../providers/colleague.service";
import {VoteService} from "../../../providers/vote.service";
import {LikeHate} from "../../../models/like-hate";
import {Vote} from "../../../models/vote";
import {Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {

  @Output() vote = new EventEmitter<Vote>();
  // colleagues: Colleague[] = this.colleagueService.list();
  colleagues: Colleague[] = [];

  constructor(private colleagueService: ColleagueService,
              private voteService: VoteService) {
    this.init();

  }
    init() {
      this.colleagueService.list()
        .subscribe((tabCols: Colleague[]) => this.colleagues = tabCols);
    }

  like(col:Colleague) {

    this.voteService.vote(col.pseudo, LikeHate.LIKE)
      .subscribe(colAJour => {
        col.score = colAJour.score
      })

  }

  hate(col: Colleague) {
    this.voteService.vote(col.pseudo, LikeHate.HATE)
      .subscribe(colAJour => {
        col.score = colAJour.score
      })
  }

  // traiterVote(vote:Vote){
  //   this.vote.emit(vote);
  // }

}
