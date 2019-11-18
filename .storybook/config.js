import { configure } from "@storybook/react";

// const req = require.context("./stories", true, /\.stories.js$/);

// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

function loadStories() {
  require("./stories/Button.stories.js");
}

configure(loadStories, module);
