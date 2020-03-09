import { Component, OnInit, Input } from '@angular/core';
import Work from '../../models/work.model';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @Input() public works: Work[];

  public displayedColumns: string[] = ['date', 'description'];
  public dataSource: Work[] = this.works;

  constructor() { }

  public ngOnInit(): void {
  }

}
