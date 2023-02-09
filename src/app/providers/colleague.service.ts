import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {ColleagueComponent} from "../shared/components/colleague/colleague.component";
import {Observable, Subject} from "rxjs";
import {LikeHate} from "../models/like-hate";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
  CreateColleagueFormsComponent
} from "../shared/components/create-colleague-forms/create-colleague-forms.component";
import {ColleagueListComponent} from "../shared/components/colleague-list/colleague-list.component";
import {ColleagueApi} from "../models/colleague-api";


@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor(private http: HttpClient) { }

  private action = new Subject<LikeHate>();
  get actionObs() {
    return this.action.asObservable();
  }
  emit(data: LikeHate) {
    this.action.next(data);
  }
  list(): Observable<Colleague[]> {
    return this.http.get<Colleague[]>('https://dev.cleverapps.io/api/v2/colleagues')
  }

  getByPseudo(pseudo: string) {
    return this.http.get<ColleagueApi>(`https://dev.cleverapps.io/api/v2/colleagues/${pseudo}` )
  }

 /* newColleagueForm(colleague: CreateColleagueFormsComponent) :Observable<any> {
    console.log("Creation Collegue");
    const httpOptions ={
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http
      .post<ColleagueListComponent>(
        'https://dev.cleverapps.io/api/v2/colleagues',
        {
          "pseudo": colleague.pseudo,
          "lastN": colleague.lastN,
          "firstN": colleague.firstN,
          "photo": "https://randomuser.me/api/portraits/men/62.jpg"
        },
        httpOptions
      )
  } */

  // list(): Colleague[] {
  //   return [
  //     {
  //       pseudo: "minimiskine",
  //       score: 50,
  //       photo: "https://randomuser.me/api/portraits/men/74.jpg",
  //     },
  //     {
  //       pseudo: "megamiskine",
  //       score: 100,
  //       photo: "https://randomuser.me/api/portraits/men/75.jpg",
  //     },
  //     {
  //       pseudo: 'Galérien',
  //       score: 0,
  //       photo: 'https://randomuser.me/api/portraits/men/73.jpg',
  //     },
  //     {
  //       pseudo: 'Dolorhombre',
  //       score: 12,
  //       photo: 'https://randomuser.me/api/portraits/women/75.jpg',
  //     },
  //     {
  //       pseudo: 'Painman',
  //       score: 5,
  //       photo: 'https://randomuser.me/api/portraits/men/71.jpg',
  //     },
  //     {
  //       pseudo: 'StruggleBoy',
  //       score: 5,
  //       photo: 'https://randomuser.me/api/portraits/men/79.jpg',
  //     },
  //     {
  //       pseudo: "Megaman",
  //       score: 100,
  //       photo: "https://randomuser.me/api/portraits/men/30.jpg",
  //     },
  //     {
  //       pseudo: "Akira Fudo",
  //       score: 1000,
  //       photo: "https://randomuser.me/api/portraits/men/33.jpg",
  //     },
  //     {
  //       pseudo: "Zoro",
  //       score: 888,
  //       photo: "https://randomuser.me/api/portraits/men/44.jpg",
  //     },
  //     {
  //       pseudo: "Shinichi kudo",
  //       score: 999,
  //       photo: "https://randomuser.me/api/portraits/men/45.jpg",
  //     },
  //     {
  //       pseudo: "Kakashi hatake",
  //       score: 777,
  //       photo: "https://randomuser.me/api/portraits/men/34.jpg",
  //     },
  //     {
  //       pseudo: "Itachi Uchiwa",
  //       score: 666,
  //       photo: "https://randomuser.me/api/portraits/men/24.jpg",
  //     },
  //     {
  //       pseudo: "Lelouch Vi Brittania",
  //       score: 753,
  //       photo: "https://randomuser.me/api/portraits/men/75.jpg",
  //     },
  //     {
  //       pseudo: "Mikazuki Augus",
  //       score: 889,
  //       photo: "https://randomuser.me/api/portraits/men/72.jpg"
  //     },
  //     {
  //       pseudo: "Orga Itsuka",
  //       score: 756,
  //       photo: "https://randomuser.me/api/portraits/men/75.jpg",
  //     },
  //     {
  //       pseudo: "Hisoka Morow",
  //       score: 888,
  //       photo: "https://randomuser.me/api/portraits/men/88.jpg",
  //     },
  //   ]
  // }

}
