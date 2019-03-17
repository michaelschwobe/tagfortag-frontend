import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Local modules.
import SearchForm from './SearchForm';

// -----------------------------------------------------------------------------

storiesOf('SearchForm', module)
  .addDecorator(withInfo) // Must be first!
  .addDecorator(withKnobs)
  .add('default', () => (
    <SearchForm
      initialValues={{ term: '' }}
      handleTerm={action('handleTerm')}
      handleReset={action('handleReset')}
    />
  ))
  .add('initialValues', () => (
    <SearchForm
      initialValues={object('initialValues', { term: 'q' })}
      handleTerm={action('handleTerm')}
      handleReset={action('handleReset')}
    />
  ));
