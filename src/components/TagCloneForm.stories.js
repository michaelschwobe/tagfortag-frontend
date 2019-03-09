import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Local modules.
import TagCloneForm from './TagCloneForm';

// -----------------------------------------------------------------------------

// TODO: Write <TagCloneForm /> stories.
storiesOf('TagCloneForm', module)
  .addDecorator(withInfo) // Must be first!
  .addDecorator(withKnobs)
  .add('default', () => (
    <TagCloneForm
      initialValues={object('initialValues', { currId: '', nextId: '' })}
      onSubmit={action('onSubmit')}
    />
  ))
  .add('initialValues', () => (
    <TagCloneForm
      initialValues={object('initialValues', { currId: 'xxx', nextId: 'yyy' })}
      onSubmit={action('onSubmit')}
    />
  ));
