import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Local modules.
import SearchForm from './SearchForm';

// -----------------------------------------------------------------------------

const initialValues = {
  term: '',
};

// TODO: Write <SearchForm /> stories.
storiesOf('SearchForm', module)
  .addDecorator(withInfo) // Must be first!
  .addDecorator(withKnobs)
  .add('default', () => (
    <SearchForm
      initialValues={object('initialValues', initialValues)}
      handleTerm={action('handleTerm')}
      handleReset={action('handleReset')}
    />
  ));
