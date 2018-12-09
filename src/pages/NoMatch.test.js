import React from 'react';
import { cleanup, render } from 'react-testing-library';

// Components.
import NoMatch from './NoMatch';

// -----------------------------------------------------------------------------

describe('<NoMatch>', () => {
  afterEach(cleanup);

  it('Renders to the DOM', () => {
    render(<NoMatch />);
  });

  // TODO: Write <NoMatch /> tests.
});
