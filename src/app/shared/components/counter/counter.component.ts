import { Component } from '@angular/core';
import {LikeHate} from "../../../models/like-hate";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  like: number = 0;
  hate: number = 0;

  constructor(private voteService: VoteService) {
    this.init();
  }

  private init(){
    this.voteService.voteObs()
      .subscribe(newVote => {


        if (newVote.likeHate === LikeHate.LIKE) this.like++;
        if (newVote.likeHate === LikeHate.HATE) this.hate++;
  })
  }

}
