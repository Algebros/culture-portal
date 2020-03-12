import { Component, Input, OnInit } from '@angular/core';
import Developer from 'src/app/main/models/developer.model';
const mocks = require("./mocks.json");

@Component({
  selector: 'app-developer-card',
  templateUrl: './developer-card.component.html',
  styleUrls: ['./developer-card.component.scss']
})
export class DeveloperCardComponent implements OnInit {

  public developer: Developer = mocks.developer;

  constructor() { }

  public ngOnInit(): void {
  }

}
