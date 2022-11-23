/* config-overrides.js */

const { alias } = require("react-app-rewire-alias");

// module.exports = alias(aliasMap);

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  alias({
    "@components": "src/components",
    "@constants": "src/constants",
    "@containers": "src/containers",
    "@hoc-helpers": "src/hoc-helpers",
    "@styles": "src/styles",
    "@utils": "src/utils",
    "@services": "src/services",
    "@routes": "src/routes",
    "@static": "src/static",
    "@hooks": "src/hooks",
  })(config);

  return config;
};
