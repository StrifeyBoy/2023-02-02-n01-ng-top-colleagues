import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from '../shared/components/like-hate/like-hate.component';
import { ColleagueComponent } from '../shared/components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { ScorePipe } from '../shared/pipes/score.pipe';
import { VotingHistoryComponent } from '../shared/components/voting-history/voting-history.component';
import { CounterComponent } from '../shared/components/counter/counter.component';
import {VoteService} from "../providers/vote.service";
import { CreateColleagueFormsComponent } from './components/create-colleague-forms/create-colleague-forms.component';
import { ColleagueDetailsComponent } from '../shared/components/colleague-details/colleague-details.component';



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
    CounterComponent,
    CreateColleagueFormsComponent,
    ColleagueDetailsComponent,
  ],
  exports: [
    ColleagueListComponent,
    VotingHistoryComponent,
    CounterComponent,
    CreateColleagueFormsComponent,
    ColleagueDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
