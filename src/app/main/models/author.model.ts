import Work from './work.model';
import Activity from './activity.model';
import Location from './location.model';

export default interface Author {
  id: number;
  firstname: string;
  patronymic?: string;
  lastname: string;
  born: Date;
  died?: Date;
  title: string;
  quote: string;
  summary: string;
  youtube: string;
  gallery: string;
  works: Work[];
  timeline: Activity[];
  locations: Location[];
}
