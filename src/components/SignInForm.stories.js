import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

// Local modules.
import SignInForm from './SignInForm';

// -----------------------------------------------------------------------------

// TODO: Write <SignInForm /> stories.
storiesOf('SignInForm', module)
  .addDecorator(withInfo) // Must be first!
  .add('default', () => <SignInForm onSubmit={action('onSubmit')} />);
