import { IWorklog } from './../../app/main/models/worklog.model';

// TODO Fill data
export const worklog: IWorklog[] = [
  {
    name: 'Anhelina Lakhtanava',
    works: [
      { feature: 'interfaces', time: 0.5},
      { feature: 'mockups', time: 4.5},
      { feature: 'content service', time: 0.5},
    ]
  },
  {
    name: 'Sofroniy Miadvedzeu',
    works: []
  },
  {
    name: 'Katsiaryna Zhdanovich',
    works: []
  },
  {
    name: 'Yauhen Pachankou',
    works: []
  },
  {
    name: 'Denis Paragas',
    works: []
  },
  {
    name: 'Yauhen Kalanitski',
    works: [
      { feature: 'content', time: 3},
      { feature: 'worklog', time: 3},
    ]
  },
];
