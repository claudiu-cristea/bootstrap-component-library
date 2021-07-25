const drupalAttribute = require("drupal-attribute");

module.exports = {
  title: {
    content: "Title card",
  },
  subtitle: {
    content: "Subtitle card",
    classes: "mb-2",
  },
  text: {
    content: "Text card with longer text which is supported",
    classes: "mb-2",
  },
  image: "<img src='https://picsum.photos/seed/1002/600/400' alt='alt img' />",
  content: "<button class='btn btn-primary'>Custom action</button>",
  card_header: "Header of card",
  card_footer: "Footer of card",
  attributes: new drupalAttribute().addClass("w-25"),
};
