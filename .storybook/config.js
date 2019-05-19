import { addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';

// -----------------------------------------------------------------------------

/**
 * (Re-)configure Storybook UI at runtime.
 * @link https://www.npmjs.com/package/@storybook/theming
 */
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'TagForTag',
    }),
    showPanel: true,
    panelPosition: 'right',
  },
});

// Automatically import all files ending in `*.stories.js` within `src/`.
const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
