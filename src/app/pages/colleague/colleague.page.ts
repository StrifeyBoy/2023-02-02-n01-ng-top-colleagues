import {Component, OnInit} from '@angular/core';
import {ColleagueService} from "../../providers/colleague.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Colleague} from "../../models/colleague";
import {Observable} from "rxjs";
import {ColleagueApi} from "../../models/colleague-api";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.page.html',
  styleUrls: ['./colleague.page.scss']
})
export class ColleaguePage implements OnInit{

  colleague!: ColleagueApi ;

  constructor
  (private route: ActivatedRoute,
   private colleagueService: ColleagueService
  ) {

    const pseudo = route.snapshot.paramMap.get("pseudo")

    if(pseudo) {
      this.colleagueService.getByPseudo(pseudo)
        .subscribe(col => this.colleague = col);
    }
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) =>{
      const pseudo = params.get('pseudo');

      if(pseudo) {
        this.colleagueService.getByPseudo(pseudo)
          .subscribe(col => this.colleague = col);
      }
    });

  }

}
