import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-button/data";
import toggleDemoData from "@oe/data-button/toggleData";
import popoverDemoData from "@oe/data-button/popoverData";
import tooltipDemoData from "@oe/data-button/tooltipData";
import spinnerDemoData from "@oe/data-button/spinnerData";
import button from "./button.html.twig";
import { getIconControls, getVariants } from "@oe/story-utils";
import defaultSprite from "@oe/bootstrap/bootstrap-icons.svg";

const withCollapse = (story) => {
  const demo = story();
  return `
    ${demo} 
    <div class="collapse mt-3" id="${toggleDemoData.extra_attributes[3].value}">
      ${toggleDemoData.collapse_text}
    </div>`;
};

const getArgTypes = (data) => {
  return {
    label: {
      type: { name: "string" },
      description: "Label of the button",
      defaultValue: data.label,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    type: {
      type: { name: "select" },
      description: "Type of the button",
      defaultValue: "button",
      control: {
        type: "select",
        options: {
          Button: "button",
          Submit: "submit",
          Reset: "reset",
        },
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "button" },
        category: "Content",
      },
    },
    assistive_text: {
      type: { name: "string" },
      name: "Additional text visually hidden",
      description:
        "Text inside the button to be visible on assistive technologies",
      defaultValue: false,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    outline: {
      type: { name: "boolean" },
      description: "Enable outline style",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    variant: {
      type: { name: "select" },
      description: "Variant of the button",
      defaultValue: data.variant,
      control: {
        type: "select",
        options: getVariants(false, ["link"]),
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
        category: "Style",
      },
    },
    size: {
      type: { name: "select" },
      description: "Size of the button",
      defaultValue: "md",
      control: {
        type: "select",
        options: { small: "sm", medium: "md", large: "lg" },
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
        category: "Style",
      },
    },
    disabled: {
      type: { name: "boolean" },
      description: "Enable the disabled state",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    text_nowrap: {
      type: { name: "boolean" },
      name: "Prevent label from wrapping",
      description: "Button text should not wrap",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    extra_attributes: {
      type: { name: "array of objects" },
      description: "Extra attributes",
      defaultValue: data.extra_attributes || [{}],
      control: {
        type: "object",
      },
      table: {
        type: { summary: "array of objects" },
        defaultValue: { summary: [] },
        category: "extra attributes",
      },
    },
    ...getIconControls("button"),
  };
};

const applyArgs = (data, args) => {
  if (args.name && args.name !== "none") {
    data.icon = {};
    data.icon.name = args.name;
    data.icon.size = args.size;
    data.icon.path = defaultSprite;
    data.icon.transformation = args.transformation;
  }
  if (args.name == "none") {
    data.icon = null;
  }
  return Object.assign(data, args);
};

export default {
  title: "Components/Button",
  decorators: [withDesign],
};

export const Default = (args) => button(applyArgs(demoData, args));

Default.argTypes = getArgTypes(demoData);
Default.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2624%3A0",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/components/buttons/",
    },
  ],
};

export const Collapse = (args) => button(applyArgs(toggleDemoData, args));

Collapse.storyName = "Collapse";
Collapse.argTypes = getArgTypes(toggleDemoData);
Collapse.decorators = [withCollapse];
Collapse.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2726%3A0",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/components/collapse/",
    },
  ],
};

export const Popover = (args) => button(applyArgs(popoverDemoData, args));

Popover.storyName = "Popover";
Popover.argTypes = getArgTypes(popoverDemoData);
Popover.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2738%3A345",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/components/popovers/",
    },
  ],
};

export const Tooltip = (args) => button(applyArgs(tooltipDemoData, args));

Tooltip.storyName = "Tooltip";
Tooltip.argTypes = getArgTypes(tooltipDemoData, "tooltip");
Tooltip.parameters = {
  design: {
    name: "Bootstrap docs",
    type: "iframe",
    url: "https://getbootstrap.com/docs/5.0/components/tooltips/",
  },
};

export const Spinner = (args) => button(applyArgs(spinnerDemoData, args));

Spinner.storyName = "Spinner";
Spinner.argTypes = getArgTypes(spinnerDemoData);
Spinner.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=3142%3A10921",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/components/spinners/",
    },
  ],
};
