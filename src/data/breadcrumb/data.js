const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute(),
  links: [
    { label: "Home", path: "/example" },
    {
      label: "About the European Commission",
      path: "/example",
    },
    { label: "News" },
  ],
};
