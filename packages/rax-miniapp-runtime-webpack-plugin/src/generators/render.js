const { resolve } = require("path");
const { readFileSync } = require("fs-extra");
const adapter = require("../adapter");
const addFileToCompilation = require("../utils/addFileToCompilation");

module.exports = function (compilation, { target, command, rootDir }) {
  const sourceNpmFile = require
    .resolve("miniapp-render")
    .replace("ali", adapter[target].fileName)
    .replace("index.js", command === "build" ? "index.min.js" : "index.js");

  addFileToCompilation(compilation, {
    filename: "render.js",
    content: readFileSync(sourceNpmFile, "utf-8"),
    command,
    target,
  });
};
