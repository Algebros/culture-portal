const { registerPlugin, routeSplit } = require("@scullyio/scully");

const TeamPlugin = 'team';

const teamPlugin = async (route, config) => {
  const { createPath } = routeSplit(route);
  const handledRoutes = [];

  handledRoutes.push(
    { route: createPath('en') },
    { route: createPath('ru') },
    { route: createPath('be') }
  );

  return handledRoutes;
};

const teamPluginValidator = async config => [];

registerPlugin('router', 'team', teamPlugin, teamPluginValidator);

exports.TeamPlugin = TeamPlugin;
