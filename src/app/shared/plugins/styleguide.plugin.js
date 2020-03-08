const { registerPlugin, routeSplit } = require("@scullyio/scully");

const StyleguidePlugin = 'styleguide';

const styleguidePlugin = async (route, config) => {
  const { createPath } = routeSplit(route);
  const handledRoutes = [];

  handledRoutes.push(
    { route: createPath('en') },
    { route: createPath('ru') },
    { route: createPath('be') },
  );

  return handledRoutes;
};

const styleguidePluginValidator = async config => [];

registerPlugin('router', 'styleguide', styleguidePlugin, styleguidePluginValidator);

exports.StyleguidePlugin = StyleguidePlugin;
