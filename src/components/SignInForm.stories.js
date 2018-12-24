import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Local modules.
import SignInForm from './SignInForm';

// -----------------------------------------------------------------------------

// TODO: Write <SignInForm /> stories.
storiesOf('SignInForm', module)
  .addDecorator(withInfo) // Must be first!
  .addDecorator(withKnobs)
  .add('default', () => (
    <SignInForm
      initialValues={object('initialValues', { email: '', password: '' })}
      onSubmit={action('onSubmit')}
    />
  ))
  .add('initialValues', () => (
    <SignInForm
      initialValues={object('initialValues', {
        email: 'user@domain.com',
        password: 'example',
      })}
      onSubmit={action('onSubmit')}
    />
  ));
