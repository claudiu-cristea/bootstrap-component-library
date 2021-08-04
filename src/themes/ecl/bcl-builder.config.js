const path = require("path");
const replace = require("@rollup/plugin-replace");
const templates = require("./custom-templates/bcl-templates");

const outputFolder = path.resolve(__dirname);
const nodeModules = "../../../node_modules";

// SCSS includePaths
const includePaths = [nodeModules];
const excludePaths = [];
if (templates.length) {
  templates.forEach((template) => {
    excludePaths.push(
      `${nodeModules}/@openeuropa/bcl-twig-templates/templates/**/${template}.html.twig`
    );
  });
}

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, "index.esm.js"),
      dest: path.resolve(outputFolder, "js/oe-bcl-ecl.esm.js"),
      options: {
        format: "esm",
        globals: { "@popperjs/core": "Popper" },
        minify: true,
        sourceMap: true,
        minifyOptions: {
          mangle: true,
          format: {
            comments: /^!/,
          },
          compress: {
            passes: 2,
          },
        },
        external: ["@popperjs/core"],
      },
    },
    {
      entry: path.resolve(__dirname, "index.umd.js"),
      dest: path.resolve(outputFolder, "js/oe-bcl-ecl.umd.js"),
      options: {
        name: "bootstrap",
        minify: true,
        sourceMap: true,
        minifyOptions: {
          mangle: true,
          format: {
            comments: /^!/,
          },
          compress: {
            passes: 2,
          },
        },
      },
    },
    {
      entry: path.resolve(__dirname, "index.umd.js"),
      dest: path.resolve(outputFolder, "js/oe-bcl-ecl.bundle.js"),
      options: {
        name: "bootstrap",
        minify: true,
        sourceMap: true,
        minifyOptions: {
          mangle: true,
          format: {
            comments: /^!/,
          },
          compress: {
            passes: 2,
          },
        },
        plugins: [
          replace({
            "process.env.NODE_ENV": '"production"',
            preventAssignment: true,
          }),
        ],
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(outputFolder, "oe-bcl-ecl.scss"),
      dest: path.resolve(outputFolder, "css/oe-bcl-ecl.css"),
      options: {
        includePaths,
        sourceMap: "file",
      },
    },
    {
      entry: path.resolve(outputFolder, "oe-bcl-ecl.scss"),
      dest: path.resolve(outputFolder, "css/oe-bcl-ecl.min.css"),
      options: {
        includePaths,
        sourceMap: "file",
        minify: true,
      },
    },
  ],
  copy: [
    {
      from: [
        path.resolve(
          nodeModules,
          "@openeuropa/bcl-bootstrap/bootstrap-icons.svg"
        ),
      ],
      to: path.resolve(outputFolder, "icons"),
      options: { up: true },
    },
    {
      from: [
        `${nodeModules}/@openeuropa/bcl-twig-templates/templates/**/*.twig`,
      ],
      to: path.resolve(outputFolder, "templates"),
      options: { up: 7 },
    },
    {
      from: ["custom-templates/**/*.twig"],
      to: path.resolve(outputFolder, "templates"),
      options: { up: 1 },
    },
  ],
};
