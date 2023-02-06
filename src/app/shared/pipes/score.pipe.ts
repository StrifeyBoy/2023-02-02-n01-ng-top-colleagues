import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let diff: string;
    if (value > 0) {
      diff = "+";
    }

    else if(value == 0) {
      diff = "";
    }

    else {
      diff = "-";
    }
    return diff + value;
  }

}
