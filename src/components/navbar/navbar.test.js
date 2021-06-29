import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-navbar/data";
import drupalAttribute from "drupal-attribute";

const template = "@oe-bcl/navbar/navbar.html.twig";
const render = (params) =>
  renderTwigFileAsNode(template, {
    ...params,
    attributes: new drupalAttribute(),
  });

describe("OE - navbar", () => {
  ["light", "dark"].forEach((color_set) => {
    test(`${color_set} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, color_set })
      ).resolves.toMatchSnapshot();
    });
  });
});
