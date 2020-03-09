import { Component, Input } from '@angular/core';
import Activity from '../../models/activity.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input() public biography: Activity[];

  public isLinear: boolean = false;

  constructor() {}

}
