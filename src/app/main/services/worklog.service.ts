import { IWorklog } from './../models/worklog.model';
import { worklog } from './../../../assets/worklog/worklog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {

  constructor() { }

  public getWorklog(): IWorklog[] {
    return worklog;
  }
}
