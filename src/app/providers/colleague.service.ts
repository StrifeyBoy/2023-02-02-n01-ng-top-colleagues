import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor() { }

  list(): Colleague[]{
    return [
        {
          pseudo: "minimiskine",
          score:  50,
          photo: "https://randomuser.me/api/portraits/men/74.jpg",
        },
        {
          pseudo: "megamiskine",
          score: 100,
          photo: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
          pseudo: 'Galérien',
          score: 0,
          photo: 'https://randomuser.me/api/portraits/men/73.jpg',
        },
        {
          pseudo: 'Dolorhombre',
          score: 12,
          photo: 'https://randomuser.me/api/portraits/women/75.jpg',
        },
        {
          pseudo: 'Painman',
          score: 5,
          photo: 'https://randomuser.me/api/portraits/men/71.jpg',
        },
        {
          pseudo: 'StruggleBoy',
          score: 5,
          photo: 'https://randomuser.me/api/portraits/men/79.jpg',
        },
        {
          pseudo: "Megaman",
          score: 100,
          photo: "https://randomuser.me/api/portraits/men/30.jpg",
        },
        {
        pseudo: "Akira Fudo",
        score: 1000,
        photo: "https://randomuser.me/api/portraits/men/33.jpg",
        },
        {
        pseudo: "Zoro",
        score: 888,
        photo: "https://randomuser.me/api/portraits/men/44.jpg",
        },
        {
        pseudo: "Shinichi kudo",
        score: 999,
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        {
        pseudo: "Kakashi hatake",
        score: 777,
        photo: "https://randomuser.me/api/portraits/men/34.jpg",
          },
        {
        pseudo: "Itachi Uchiwa",
        score: 666,
        photo: "https://randomuser.me/api/portraits/men/24.jpg",
        },
       {
        pseudo: "Lelouch Vi Brittania",
        score: 753,
        photo: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
        pseudo: "Mikazuki Augus",
        score: 889,
        photo: "https://randomuser.me/api/portraits/men/72.jpg"
        },
        {
        pseudo: "Orga Itsuka",
        score: 756,
        photo: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
          pseudo: "Hisoka Morow",
          score: 888,
          photo: "https://randomuser.me/api/portraits/men/88.jpg",
        },
    ]
    }
}
