import React from 'react';
import { cleanup, render } from 'react-testing-library';

// Components.
import Home from './Home';

// -----------------------------------------------------------------------------

describe('<Home>', () => {
  afterEach(cleanup);

  it('Renders to the DOM', () => {
    render(<Home />);
  });

  // TODO: Write <Home /> tests.
});
