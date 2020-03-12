import { Component, Input } from '@angular/core';
import Activity from 'src/app/main/models/activity.model';
const mocks = require("./mocks.json");

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  public biography: Activity[] = mocks.activity;

  public isLinear: boolean = false;

  constructor() {}

}
