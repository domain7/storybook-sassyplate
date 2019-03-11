import { configure, addParameters } from '@storybook/html';
import { create } from '@storybook/theming'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Option defaults:
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Style Tiles',
      brandUrl: 'https://domain7.com',
      brandImage: null,
    }),
    isFullscreen: false,
    panelPosition: 'right',
  },
})

configure(loadStories, module);