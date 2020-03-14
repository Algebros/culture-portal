import {Component} from '@angular/core';
import Scopes from '../../models/self-evaluation-scopes.model';
import {scopes} from '../../mocks/self-evaluation-mock';

@Component({
  selector: 'app-self-evaluation',
  templateUrl: './self-evaluation.component.html',
  styleUrls: ['./self-evaluation.component.scss']
})
export class SelfEvaluationComponent {
  public scopes: Scopes = scopes;

  public minScore: number = 0;

  public normalScore: number = 0;

  get sumMinScore(): number {
    return this.scopes.min
      .filter(criteria => criteria.isChecked)
      .reduce((a, b) => a + +b.points, this.minScore);
  }

  get sumNormalScore(): number {
    return this.scopes.normal
      .filter(criteria => criteria.isChecked)
      .reduce((a, b) => a + +b.points, this.minScore);
  }

  get sumExtraScore(): number {
    return this.scopes.extra
      .filter(criteria => criteria.isChecked)
      .reduce((a, b) => a + +b.points, this.minScore);
  }

  get sumFinesScore(): number {
    return this.scopes.fines
      .filter(criteria => criteria.isChecked)
      .reduce((a, b) => a + +b.points, this.minScore);
  }
}
