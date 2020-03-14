import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  public transform(value: string, arg: string): Array<string> {
    return value.split(arg);
  }

}
