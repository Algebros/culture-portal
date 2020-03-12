export interface IWorklog {
  name: string;
  works: IWork[];
}

export interface IWork {
  feature: string;
  time: number;
}
