import { HttpClient } from '@angular/common/http';
import { IWorklog } from './../models/worklog.model';
import { worklog } from './../../../assets/worklog/worklog';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, from } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {

  private key: string = 'AIzaSyC2WjSIlrLshnULuV0pdt4xX1gx1M3fkUU';
  private sheet: string = '1vC1GY7Ig7zZagIGY7Oxj_mpWJCg-I8c2BK21A_kOOI4';
  private url: string = `https://sheets.googleapis.com/v4/spreadsheets/${this.sheet}`;
  private developers: string[];
  private worklog: IWorklog[] = [];
  private worklog$: BehaviorSubject<IWorklog[]> = new BehaviorSubject<IWorklog[]>([]);

  constructor(private httpClient: HttpClient) {
    this.getWorklog2();
  }

  public getWorklog(): IWorklog[] {
    return worklog;
  }
  public getWorklog$(): Observable<IWorklog[]> {
    return this.worklog$;
  }

  public getJobs(): void {
    // tslint:disable-next-line: no-any
    const getData: any = (param) => {
      return this.httpClient.get(`${this.url}/values/'${param}'!A2:B7?key=${this.key}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
    };

    from(this.developers).pipe(
      mergeMap(param => getData(param))
    // tslint:disable-next-line: no-any
    ).subscribe((val: any) => {
      const log: IWorklog = {name: '', works: []};
      log.name = val.range.split('!')[0].replace(/\'/g, '');
      val.values.forEach((job) => log.works.push({feature: job[0], time: job[1]}));
      console.log(log);
      console.log(this.worklog);
      this.worklog.push(log);
      this.worklog$.next(this.worklog);
    });
  }

  public getWorklog2(): void {
    this.httpClient.get(`${this.url}?key=${this.key}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      // tslint:disable-next-line: no-any
    }).subscribe((res: any) => {
      this.developers = res.sheets.map((sheet) => sheet.properties.title);
      console.log(this.developers);
      this.getJobs();
    });
  }
}
