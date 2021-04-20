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
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    collapse_text: {
      type: { name: "string" },
      description: "Text of the collapse",
      defaultValue: data.collapse_text,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
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
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2726%3A0",
  },
};

export const Default = (args) => collapse(applyArgs(demoData, args));

Default.argTypes = getArgTypes(demoData);
