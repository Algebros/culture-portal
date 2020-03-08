const { httpGetJson } = require("@scullyio/scully/utils/httpGetJson");
const { registerPlugin, routeSplit } = require("@scullyio/scully");

const AuthorPlugin = "author";

const authorPlugin = async (route, config) => {
  const response = await httpGetJson(config.url);
  const { createPath } = routeSplit(route);
  const authors = response.data.author;
  const handledRoutes = [];

  for (let author of authors) {
    handledRoutes.push(
      { route: createPath('en', author.id) },
      { route: createPath('ru', author.id) },
      { route: createPath('be', author.id) },
    );
  }
  return handledRoutes;
};

const authorPluginValidator = async conf => [];

registerPlugin("router", "author", authorPlugin, authorPluginValidator);

exports.AuthorPlugin = AuthorPlugin;
