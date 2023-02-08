import {Colleague} from "./colleague";
import {LikeHate} from "./like-hate";

export interface VoteApi {

  colleague: Colleague;
  score: number;
  like_hate: LikeHate;
}
