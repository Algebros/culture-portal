export interface IWorklog {
  name: string;
  works: IWork[];
}

interface IWork {
  feature: string;
  time: number;
}
