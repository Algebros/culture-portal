import { Component, OnInit } from '@angular/core';
import { IWorklog } from '../../models/worklog.model';
import { WorklogService } from '../../services/worklog.service';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.scss']
})
export class WorklogComponent implements OnInit {

  public worklog: IWorklog[];
  public columns: string[] = ['feature', 'time'];

  constructor(private worklogService: WorklogService) { }

  public ngOnInit(): void {
    this.worklog = this.worklogService.getWorklog();
  }

}
