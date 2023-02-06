import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHateComponent} from "../like-hate/like-hate.component";
@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {

  colleaguelist: Colleague[] = [
    {
      pseudo: "minimiskine",
      score:  50,
      photo: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      pseudo: "megamiskine",
      score: 100,
      photo: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      pseudo: 'Galérien',
      score: 0,
      photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
      pseudo: 'Dolorhombre',
      score: 12,
      photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
      pseudo: 'Painman',
      score: 5,
      photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
      pseudo: 'StruggleBoy',
      score: 5,
      photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
  ]


}
