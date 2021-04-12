import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-collapse/data";
import collapse from "./collapse.html.twig";

const getArgTypes = (data) => {
  return {
    id: {
      type: { name: "string" },
      description: "Id of the collapse",
      defaultValue: data.id,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: data.id },
        category: "Content",
      },
    },
    switchTrigger: {
      type: { name: "boolean" },
      description: "Change between the trigger anchor and button",
      defaultValue: data.switchTrigger,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: data.switchTrigger },
        category: "Settings",
      },
    },
    label: {
      type: { name: "string" },
      description: "Label of the button",
      defaultValue: data.label,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: data.label },
        category: "Content",
      },
    },
    collapseText: {
      type: { name: "string" },
      description: "Text of the collapse",
      defaultValue: data.collapseText,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: data.collapseText },
        category: "Content",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Collapse",
  decorators: [withDesign],
};

export const Default = (args) => collapse(applyArgs(demoData, args));

Default.storyName = "Default";
Default.argTypes = getArgTypes(demoData);
Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2726%3A0",
  },
};