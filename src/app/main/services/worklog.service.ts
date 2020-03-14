import { environment } from 'src/environments/environment';
import { SheetsResponse, RangeResponse } from './../models/google-sheets.model';
import { HttpClient } from '@angular/common/http';
import { IWorklog } from './../models/worklog.model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, from } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {

  private key: string = environment.GOOGLESHEETS_API_KEY;
  private sheet: string = environment.SHEET;
  private url: string = `${environment.GOOGLESHEETS_URL}${this.sheet}`;
  private developers: string[];
  private worklog: IWorklog[] = [];
  private worklog$: BehaviorSubject<IWorklog[]> = new BehaviorSubject<IWorklog[]>([]);

  constructor(private httpClient: HttpClient) {

  }

  public getWorklog$(): Observable<IWorklog[]> {
    this.getWorklog();
    return this.worklog$;
  }

  public getJobs(): void {
    // tslint:disable-next-line: no-any
    const getData: any = (param) => {
      return this.httpClient.get(`${this.url}/values/'${param}'!A2:B100?key=${this.key}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
    };

    from(this.developers).pipe(
      mergeMap(param => getData(param))
    ).subscribe((workList: RangeResponse) => {
      const log: IWorklog = { name: '', works: [] };
      log.name = workList.range.split('!')[0].replace(/\'/g, '');
      if (workList.values) {
        workList.values.forEach((job) => {
          const time: number = Number.isNaN( +job[1] ) ? 0 : Number(job[1]);
          log.works.push({ feature: job[0], time: time });
        });
      }
      this.worklog.push(log);
      this.worklog$.next(this.worklog);
    });
  }

  public getWorklog(): void {
    this.httpClient.get(`${this.url}?key=${this.key}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).subscribe((res: SheetsResponse) => {
      this.developers = res.sheets.map((sheet) => sheet.properties.title);
      this.getJobs();
    });
  }

  public clearWorklog(): void {
    this.worklog = [];
  }
}
