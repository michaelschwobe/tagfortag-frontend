import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Local modules.
import TagMergeForm from './TagMergeForm';

// -----------------------------------------------------------------------------

storiesOf('TagMergeForm', module)
  .addDecorator(withInfo) // Must be first!
  .addDecorator(withKnobs)
  .add('default', () => (
    <TagMergeForm
      initialValues={object('initialValues', { currId: '', nextId: '' })}
      onSubmit={action('onSubmit')}
    />
  ))
  .add('initialValues', () => (
    <TagMergeForm
      initialValues={object('initialValues', { currId: 'xxx', nextId: 'yyy' })}
      onSubmit={action('onSubmit')}
    />
  ));
