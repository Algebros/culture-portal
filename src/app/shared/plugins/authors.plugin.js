const { registerPlugin, routeSplit } = require("@scullyio/scully");

const AuthorsPlugin = 'authors';

const authorsPlugin = async (route, config) => {
  const { createPath } = routeSplit(route);
  const handledRoutes = [];

  handledRoutes.push(
    { route: createPath('en') },
    { route: createPath('ru') },
    { route: createPath('be') },
  );

  return handledRoutes;
};

const authorsPluginValidator = async config => [];

registerPlugin('router', 'authors', authorsPlugin, authorsPluginValidator);

exports.AuthorsPlugin = AuthorsPlugin;
