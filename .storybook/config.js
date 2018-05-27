// import { configure } from "@storybook/vue";

// // automatically import all files ending in *.stories.js
// const req = require.context("../stories/specs", true, /.storie.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);


import { configure, setAddon } from '@storybook/vue';
import Vue from 'vue'

function loadStories() {
  require('../storyies/specs');
}
configure(loadStories, module);