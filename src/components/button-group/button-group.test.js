import { merge, renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-data-button-group/data";
import inputGroupData from "@openeuropa/bcl-data-button-group/inputGroupData";
import toolbarData from "@openeuropa/bcl-data-button-group/toolbarData";

const template = "@oe-bcl/button-group/button-group.html.twig";
const render = (params, reset) => renderTwigFileAsNode(template, params, reset);
const sizes = ["lg", "md", "sm"];

describe("OE - Button-group", () => {
  sizes.forEach((size) => {
    test(`${size} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render({ ...demoData, size: size }, true)
      ).resolves.toMatchSnapshot();
    });
  });

  test(`vertical renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, vertical: true }, true)
    ).resolves.toMatchSnapshot();
  });

  test(`input-group renders correctly`, () => {
    expect.assertions(1);

    return expect(render(inputGroupData)).resolves.toMatchSnapshot();
  });

  test(`toolbar renders correctly`, () => {
    expect.assertions(1);

    return expect(render(toolbarData)).resolves.toMatchSnapshot();
  });
});
