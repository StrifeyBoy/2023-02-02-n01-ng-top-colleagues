import { Component } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import {Colleague} from "./models/colleague";

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';

  colleague1: Colleague = {
    pseudo: 'Galérien',
    score: 0,
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',


  }
  colleague2: Colleague = {
    pseudo: 'Dolorhombre',
    score: 12,
    photo: '',
  }

  colleague3: Colleague = {
    pseudo: 'Painman',
    score: 5,
    photo: '',

  }
}

