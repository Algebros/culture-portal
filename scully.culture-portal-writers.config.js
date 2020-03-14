const { HomePlugin } = require('./src/app/shared/plugins/home.plugin');
const { AuthorsPlugin } = require('./src/app/shared/plugins/authors.plugin');
const { AuthorPlugin } = require('./src/app/shared/plugins/author.plugin');
const { TeamPlugin } = require('./src/app/shared/plugins/team.plugin');
const { WorklogPlugin } = require('./src/app/shared/plugins/worklog.plugin');

exports.config = {
  projectRoot: "./src",
  projectName: "culture-portal-writers",
  outDir: './dist/static',
  routes: {
    '/home/:language': {
      type: HomePlugin,
      url: 'http://i-hate-alpha-scully.me.sure',
    },
    '/home/:language/authors': {
      type: AuthorsPlugin,
      url: 'http://i-hate-alpha-scully.me.sure',
    },
    '/home/:language/author/:id': {
      type: AuthorPlugin,
      url: 'https://api.buttercms.com/v2/content/?keys=author&locale=en&auth_token=ccab3eb57bd8bed305f2371c2b2250d0e02d7737',
    },
    '/home/:language/team': {
      type: TeamPlugin,
      url: 'http://i-hate-alpha-scully.me.sure',
    },
    '/home/:language/worklog': {
      type: WorklogPlugin,
      url: 'http://i-hate-alpha-scully.me.sure',
    }
  }
};
