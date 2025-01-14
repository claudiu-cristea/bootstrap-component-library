import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-carousel/data.js";
import carousel from "@openeuropa/bcl-carousel/carousel.html.twig";
import drupalAttribute from "drupal-attribute";

const getArgs = (data) => {
  return {
    id: data.id,
    items: data.items,
    autoinit: true,
    autoplay: true,
    disable_touch: false,
    with_controls: true,
    prev_label: data.prev_label,
    next_label: data.next_label,
    with_indicators: data.with_indicators,
    fade: false,
    dark: false,
  };
};

const getArgTypes = (data) => {
  return {
    id: {
      type: { name: "string", required: true },
      description: "Id attribute of the carousel",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    items: {
      type: { name: "object", required: true },
      description: "Carousel items",
      table: {
        type: { summary: "array of objects" },
        category: "Content",
      },
    },
    autoinit: {
      name: "initialize the carousel",
      type: { name: "boolean" },
      description:
        "If set to false the carousel need to be instantiated via javascript.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Behaviour",
      },
    },
    autoplay: {
      name: "automatic sliding",
      type: { name: "boolean" },
      description: "If set to false the carousel won't slide automatically",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Behaviour",
      },
    },
    disable_touch: {
      name: "disable touch swiping",
      type: { name: "boolean" },
      description: "If set to false the carousel won't swipe",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Behaviour",
      },
    },
    with_controls: {
      name: "controls",
      type: { name: "boolean" },
      description: "Enable the controls (prev and next buttons)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Content",
      },
    },
    prev_label: {
      name: "label for the prev button",
      type: { name: "string" },
      description: "The label is for accessibility, it's hidden",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    next_label: {
      name: "label for the next button",
      type: { name: "string" },
      description: "The label is for accessibility, it's hidden",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    with_indicators: {
      name: "Indicators",
      type: { name: "boolean" },
      description: "Enable the slides indicators",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Content",
      },
    },
    fade: {
      name: "fade",
      type: { name: "boolean" },
      description: "Enable fading transition",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Behaviour",
      },
    },
    dark: {
      name: "dark",
      type: { name: "boolean" },
      description: "Enable dark variant",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };
};

const parseImages = (data) => {
  data.items.forEach((slide) => {
    if (slide.image) {
      let alt = ``;
      if (slide.image.alt) {
        alt = `alt="${slide.image.alt}"`;
      }
      slide.image = `<img src="${slide.image.src}" ${alt} class="d-block w-100">`;
    }
  });
  return data;
};

const resetAttrs = (data, args) => {
  data.attributes.removeClass("carousel-fade");
  data.attributes.removeClass("carousel-dark");
  if (!args.autoinit) {
    data.attributes.removeAttribute("data-bs-ride");
  }
  if (!args.disable_touch) {
    data.attributes.removeAttribute("data-bs-touch");
  }
  if (args.autoplay) {
    data.attributes.removeAttribute("data-bs-interval");
  }
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  parseImages(data);
  resetAttrs(data, args);
  return Object.assign(data, args);
};

export default {
  title: "Components/Carousel",
  decorators: [withDesign],
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2802%3A0",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=16%3A25",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/carousel/",
      },
    ],
  },
};

export const Default = (args) => carousel(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
