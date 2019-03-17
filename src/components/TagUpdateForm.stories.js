import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Local modules.
import TagUpdateForm from './TagUpdateForm';

// -----------------------------------------------------------------------------

storiesOf('TagUpdateForm', module)
  .addDecorator(withInfo) // Must be first!
  .addDecorator(withKnobs)
  .add('default', () => (
    <TagUpdateForm
      initialValues={object('initialValues', { name: '' })}
      onSubmit={action('onSubmit')}
    />
  ))
  .add('initialValues', () => (
    <TagUpdateForm
      initialValues={object('initialValues', { name: 'example' })}
      onSubmit={action('onSubmit')}
    />
  ));
