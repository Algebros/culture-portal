import { environment } from 'src/environments/environment';
import * as Butter from 'buttercms';

// @ts-ignore
const butterService = Butter(`${environment.BUTTER_TOKEN}`); // tslint:disable-line:typedef

export default butterService;
