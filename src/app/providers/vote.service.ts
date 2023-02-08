import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {ColleagueService} from "./colleague.service";
import {Observable, Subject} from "rxjs";
import {LikeHate} from "../models/like-hate";
import {ColleagueListComponent} from "../shared/components/colleague-list/colleague-list.component";
import {HttpClient} from "@angular/common/http";
import {Colleague} from "../models/colleague";
import {VoteApi} from "../models/vote-api";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private subVote = new Subject<Vote>();

  constructor(private http: HttpClient) {}



  publishVote(vote: Vote) {
    this.subVote.next(vote);
  }

  voteObs() {
    return this.subVote.asObservable();
  }

  observableLikeHate(){
    return this.likeHate.asObservable();

  }

  private likeHate = new Subject<LikeHate>();

  list(): Observable<VoteApi[]> {
    return this.http.get<VoteApi[]>('https://dev.cleverapps.io/api/v2/votes')
  }

  vote(pseudo: string, likeOrHate: LikeHate){
    return this.http.post<Colleague>('https://dev.cleverapps.io/api/v2/votes', {
      pseudo, like_hate: likeOrHate
    })
      // .pipe(
      //   tap(() =>   this.publishVote({
      //     pseudo, likeOrHate
      //   }))
      // );
  }

  notifLikeHate(data: LikeHate){
    this.likeHate.next(data);
  }
}
