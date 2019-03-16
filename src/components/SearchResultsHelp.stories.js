import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { withKnobs, text, object } from '@storybook/addon-knobs';

// Local modules.
import SearchResultsHelp from './SearchResultsHelp';

// -----------------------------------------------------------------------------
// TODO: Write <SearchResultsHelp /> stories.
storiesOf('SearchResultsHelp', module)
  .addDecorator(withInfo) // Must be first!
  // .addDecorator(withKnobs)
  .add('default', () => <SearchResultsHelp />);
