import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Local modules.
import TagCreateForm from './TagCreateForm';

// -----------------------------------------------------------------------------

// TODO: Write <TagCreateForm /> stories.
storiesOf('TagCreateForm', module)
  .addDecorator(withInfo) // Must be first!
  .addDecorator(withKnobs)
  .add('default', () => (
    <TagCreateForm
      initialValues={object('initialValues', { name: '' })}
      onSubmit={action('onSubmit')}
    />
  ))
  .add('initialValues', () => (
    <TagCreateForm
      initialValues={object('initialValues', { name: 'example' })}
      onSubmit={action('onSubmit')}
    />
  ));
