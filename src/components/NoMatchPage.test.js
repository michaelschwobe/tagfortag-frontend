import React from 'react';
import { cleanup, render } from 'react-testing-library';

// Components.
import NoMatchPage from './NoMatchPage';

// -----------------------------------------------------------------------------

describe('<NoMatchPage>', () => {
  afterEach(cleanup);

  it('Renders to the DOM', () => {
    render(<NoMatchPage />);
  });

  // TODO: Write <NoMatchPage /> tests.
});
