import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Local modules.
import TagMergeForm from './TagMergeForm';

// -----------------------------------------------------------------------------

// TODO: Write <TagMergeForm /> stories.
storiesOf('TagMergeForm', module)
  .addDecorator(withInfo) // Must be first!
  .addDecorator(withKnobs)
  .add('default', () => (
    <TagMergeForm
      initialValues={object('initialValues', { from: '', into: '' })}
      onSubmit={action('onSubmit')}
    />
  ))
  .add('initialValues', () => (
    <TagMergeForm
      initialValues={object('initialValues', {
        from: 'a',
        into: 'b',
      })}
      onSubmit={action('onSubmit')}
    />
  ));
