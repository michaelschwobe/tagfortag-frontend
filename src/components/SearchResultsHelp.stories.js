import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// Local modules.
import SearchResultsHelp from './SearchResultsHelp';

// -----------------------------------------------------------------------------

storiesOf('SearchResultsHelp', module)
  .addDecorator(withInfo) // Must be first!
  .add('default', () => <SearchResultsHelp />);
