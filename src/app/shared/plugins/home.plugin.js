const { registerPlugin, routeSplit } = require("@scullyio/scully");

const HomePlugin = 'home';

const homePlugin = async (route, config) => {
  const { createPath } = routeSplit(route);
  const handledRoutes = [];

  handledRoutes.push(
    { route: createPath('en') },
    { route: createPath('ru') },
    { route: createPath('be') },
  );

  return handledRoutes;
};

const homePluginValidator = async config => [];

registerPlugin('router', 'home', homePlugin, homePluginValidator);

exports.HomePlugin = HomePlugin;
