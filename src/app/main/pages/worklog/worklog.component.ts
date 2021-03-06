import { Observable, Subscription } from 'rxjs';
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
  public worklog$: Subscription;
  public columns: string[] = ['feature', 'time'];
  public prefix: string = 'page.worklog.developer.';
  constructor(private worklogService: WorklogService) { }

  public ngOnInit(): void {
    if (!this.worklog) {
      this.worklog$ = this.worklogService.getWorklog$().subscribe((worklog) => {
        this.worklog = worklog;
      });
    }
  }

  public ngOnDestroy(): void {
    this.worklogService.clearWorklog();
    this.worklog$.unsubscribe();
  }

}
