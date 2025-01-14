import { withDesign } from "storybook-addon-designs";
import { getFormControls } from "@openeuropa/bcl-story-utils";
import demoData from "@openeuropa/bcl-data-select/data.js";
import demoMultiData from "@openeuropa/bcl-data-select/dataMultiselect.js";
import select from "@openeuropa/bcl-select/select.html.twig";
import drupalAttribute from "drupal-attribute";

const getArgs = (data, type) => {
  const args = {
    label: data.label,
    hidden_label: false,
    helper_text: data.helper_text,
    invalid: false,
    disabled: false,
    required: true,
    valid: false,
    invalid_feedback: data.invalid_feedback,
    valid_feedback: data.valid_feedback,
  };

  return args;
};

const getArgTypes = (data, type) => {
  return {
    ...getFormControls(data, type),
  };
};

const resetAttrs = (data, args) => {
  if (!args.disabled) {
    data.attributes.removeAttribute("disabled");
  }
  if (!args.required) {
    data.attributes.removeAttribute("required");
  }
  if (!args.multiple) {
    data.attributes.removeAttribute("multiple");
  }
  if (!args.invalid) {
    data.attributes.removeClass("is-invalid");
  }
  if (!args.valid) {
    data.attributes.removeClass("is-valid");
  }
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data, args);
  return Object.assign(data, args);
};

const initMultiselect = (story) => {
  const demo = story();
  return `
    <script>
      if (document.querySelector(".multi-select")) {
        new SlimSelect({
          select: ".multi-select",
          selectByGroup: true,
          placeholder: "Please select a value",
        });
      }
    </script>
  ${demo}`;
};

// Stories
export default {
  title: "Components/Forms/Select",
  decorators: [withDesign],
};

export const Default = (args) => select(applyArgs(demoData, args));

Default.args = getArgs(demoData, "select");
Default.argTypes = getArgTypes(demoData, "select");
Default.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2695%3A58",
    },
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=53%3A24",
    },
    {
      name: "Bootstrap docs",
      type: "iframe",
      url: "https://getbootstrap.com/docs/5.0/forms/select/",
    },
  ],
};

export const Multiselect = (args) => select(applyArgs(demoMultiData, args));

Multiselect.argTypes = getArgTypes(demoMultiData, "multiselect");
Multiselect.args = getArgs(demoMultiData, "multiselect");
Multiselect.decorators = [initMultiselect];
Multiselect.parameters = {
  design: [
    {
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2695%3A58",
    },
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=53%3A24",
    },
    {
      name: "Slim select docs",
      type: "iframe",
      url: "https://slimselectjs.com/",
    },
  ],
};
