import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

// -----------------------------------------------------------------------------

addDecorator(
  /**
   * (Re-)configure Storybook UI at runtime.
   * @link https://www.npmjs.com/package/@storybook/addon-options
   */
  withOptions({
    name: 'TagForTag',
    showAddonPanel: true,
    addonPanelInRight: true,
    // selectedAddonPanel: 'storybooks/storybook-addon-knobs',
  }),
);

// Automatically import all files ending in `*.stories.js` within `src/`.
const req = require.context('../src', true, /.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
