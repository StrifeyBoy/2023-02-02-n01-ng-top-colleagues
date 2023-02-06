import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  @Input() likeButtonDisabled = false;
  @Input() hateButtonDisabled = false;
  @Output() likeHateEmitter = new EventEmitter<LikeHate>();


  like() {
    this.likeHateEmitter.emit(LikeHate.LIKE);
  }

  hate() {
    this.likeHateEmitter.emit(LikeHate.HATE);
  }

}
