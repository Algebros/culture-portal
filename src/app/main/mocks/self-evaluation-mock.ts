import Scopes from '../models/self-evaluation-scopes.model';

export const scopes: Scopes = {
  min: [
    {
      criteria: 'Main page + page with a list of authors + author\'s ' +
        'page (only pages with content without widgets);',
      points: '10'
    },
    {
      criteria: 'Page with team members + page with worklog',
      points: '10'
    },
    {
      criteria: 'Page with list of authors contains search widget;',
      points: '10'
    },
    {
      criteria: 'Portal has two languages;',
      points: '20'
    },
  ],
  normal: [
    {
      criteria: 'Portal has page with styleguide;',
      points: '20'
    },
    {
      criteria: 'Mobile version is okey',
      points: '10'
    },
    {
      criteria: 'Ipad/tablet version is okey',
      points: '10'
    },
    {
      criteria: 'Author\'s page contains timeline;',
      points: '10'
    },
    {
      criteria: 'Author\'s page contains video overlay;',
      points: '10'
    },
    {
      criteria: 'Author\'s page contains photo gallery;',
      points: '20'
    },
    {
      criteria: 'Author\'s page contains map (geowidget);',
      points: '10'
    },
    {
      criteria: 'Design (typography, icons, colors, links + buttons + input, ui components are styled);',
      points: '20'
    },
    {
      criteria: 'Material-ui / bootstrap is used;',
      points: '20'
    },
    {
      criteria: 'Portal has third language;',
      points: '10'
    }
  ],
  extra: [
    {
      criteria: 'Confidence of the project presentation;',
      points: '10'
    },
    {
      criteria: 'Project is made using scully;',
      points: '10'
    },
    {
      criteria: 'Contentful / netlify cms / other cms is used for content management;',
      points: '10'
    },
    {
      criteria: 'Animations / special effects like paralax;',
      points: '20'
    },
    {
      criteria: 'Outstanding design;',
      points: '20'
    },
    {
      criteria: 'Storybook/angularplayground/compodoc/other ' +
        'angular styleguide/documentation tool usage for the page with styles;',
      points: '20'
    }
  ],
  fines: [
    {
      criteria: 'If there are less than 3 commits from each active team member. ' +
        'Everyone should merge their own PRs;',
      points: '-50'
    },
    {
      criteria: 'Violations stage2-tasks-requirements;',
      points: '-50'
    },
    {
      criteria: 'If there is no worklog for team;',
      points: '-40'
    },
    {
      criteria: 'Too primitive (ugly for 2020) design / UX;',
      points: '-20'
    }
  ]
};
