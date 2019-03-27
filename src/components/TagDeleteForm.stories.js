import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Local modules.
import TagDeleteForm from './TagDeleteForm';

// -----------------------------------------------------------------------------

storiesOf('TagDeleteForm', module)
  .addDecorator(withInfo) // Must be first!
  .addDecorator(withKnobs)
  .add('default', () => (
    <TagDeleteForm
      initialValues={object('initialValues', { id: '' })}
      onSubmit={action('onSubmit')}
    />
  ))
  .add('initialValues', () => (
    <TagDeleteForm
      initialValues={object('initialValues', { id: 'xxx' })}
      onSubmit={action('onSubmit')}
    />
  ));
