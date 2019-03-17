import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, number } from '@storybook/addon-knobs';

// Local modules.
import TagSearchResultsItem from './TagSearchResultsItem';

// -----------------------------------------------------------------------------

storiesOf('TagSearchResultsItem', module)
  .addDecorator(withInfo) // Must be first!
  .addDecorator(withKnobs)
  .addDecorator(story => <Router>{story()}</Router>)
  .add('default', () => (
    <TagSearchResultsItem
      id={text('id', 'xxx')}
      name={text('name', 'tagX')}
      count={number('count', 0)}
    />
  ));
