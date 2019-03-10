import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs';

// Local modules.
import SearchResults from './SearchResults';

// -----------------------------------------------------------------------------

const items = [{ id: 'xxx' }, { id: 'yyy' }, { id: 'zzz' }];

const Item = props => (
  <pre>
    <code>{JSON.stringify(props, null, 2)}</code>
  </pre>
);

// TODO: Write <SearchResults /> stories.
storiesOf('SearchResults', module)
  .addDecorator(withInfo) // Must be first!
  .addDecorator(withKnobs)
  .add('default', () => <SearchResults itemComponent={Item} />)
  .add('results', () => (
    <SearchResults items={object('items', items)} itemComponent={Item} />
  ));
