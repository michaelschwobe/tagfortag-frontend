import React from 'react';
import { cleanup, render } from 'react-testing-library';

// Components.
import UrlPage from './UrlPage';

// -----------------------------------------------------------------------------

describe('<UrlPage>', () => {
  afterEach(cleanup);

  it('Renders to the DOM', () => {
    render(<UrlPage />);
  });

  // TODO: Write <UrlPage /> tests.
});
