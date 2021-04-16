import { merge, renderTwigFileAsNode } from "@oe/test-utils";
import demoData from "@oe/data-collapse/data";

const template = "@oe/collapse/collapse.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Collapse", () => {
  test(`renders with button trigger and default text`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData})
    ).resolves.toMatchSnapshot();
  });
});
