import {Component, ElementRef, ViewChild} from '@angular/core';
import Scopes from '../../models/self-evaluation-scopes.model';
import {scopes} from '../../mocks/self-evaluation-mock';

@Component({
  selector: 'app-self-evaluation',
  templateUrl: './self-evaluation.component.html',
  styleUrls: ['./self-evaluation.component.scss']
})
export class SelfEvaluationComponent {
  @ViewChild('checkbox', {static: false}) public checkbox: ElementRef;

  public scopes: Scopes = scopes;

  public score: number = 0;

  public changeTotalScore(points: string): void {
    if ((this.checkbox.nativeElement as HTMLInputElement).checked) {
      this.score += +points;
    } else {
      this.score -= +points;
    }
  }
}
