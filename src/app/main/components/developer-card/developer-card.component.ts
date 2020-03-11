import { Component, Input, OnInit } from '@angular/core';
import Developer from '../../models/developer.model';

@Component({
  selector: 'app-developer-card',
  templateUrl: './developer-card.component.html',
  styleUrls: ['./developer-card.component.scss']
})
export class DeveloperCardComponent implements OnInit {

  @Input() public developer: Developer;
  public panelOpenState: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

  public togglePanel(): void {
    this.panelOpenState = !this.panelOpenState;
  }

}
