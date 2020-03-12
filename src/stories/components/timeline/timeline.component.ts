import { Component, Input } from '@angular/core';
import Activity from 'src/app/main/models/activity.model';
const config = require("./moks.json");

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  public biography: Activity[] = config.activity;

  public isLinear: boolean = false;

  constructor() {}

  public ngOnInit(): void {
    console.log(config.activity);
  }

}
