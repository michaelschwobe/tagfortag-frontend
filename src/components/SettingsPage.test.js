import React from 'react';
import { cleanup, render } from 'react-testing-library';

// Components.
import SettingsPage from './SettingsPage';

// -----------------------------------------------------------------------------

describe('<SettingsPage>', () => {
  afterEach(cleanup);

  it('Renders to the DOM', () => {
    render(<SettingsPage />);
  });

  // TODO: Write <SettingsPage /> tests.
});
