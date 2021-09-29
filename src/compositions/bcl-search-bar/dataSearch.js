const drupalAttribute = require("drupal-attribute");

module.exports = {
  placeholder: "Search",
  size: "sm",
  attributes: new drupalAttribute().addClass(["bcl-search-bar__input"]),
  label: "Search bar label",
  input_type: "search",
  icon: {
    name: "search",
    size: "xs",
    attributes: new drupalAttribute().addClass(["bcl-search-bar__icon"]),
  },
};