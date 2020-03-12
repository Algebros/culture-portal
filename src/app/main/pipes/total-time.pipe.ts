import { IWork } from '../models/worklog.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalTime'
})
export class TotalTimePipe implements PipeTransform {

  public transform(value: IWork[], ...args: unknown[]): number {
    return value.reduce((acc, work) => acc + work.time, 0);
  }
}
