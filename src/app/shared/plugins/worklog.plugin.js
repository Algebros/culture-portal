const { registerPlugin, routeSplit } = require("@scullyio/scully");

const WorklogPlugin = 'worklog';

const worklogPlugin = async (route, config) => {
  const { createPath } = routeSplit(route);
  const handledRoutes = [];

  handledRoutes.push(
    { route: createPath('en') },
    { route: createPath('ru') },
    { route: createPath('be') },
  );

  return handledRoutes;
};

const worklogPluginValidator = async config => [];

registerPlugin('router', 'worklog', worklogPlugin, worklogPluginValidator);

exports.WorklogPlugin = WorklogPlugin;
