import React from 'react';
import { cleanup, render } from 'react-testing-library';

// Components.
import Root from './Root';

// -----------------------------------------------------------------------------

describe('<Root>', () => {
  afterEach(cleanup);

  it('Renders to the DOM', () => {
    render(<Root />);
  });

  // TODO: Write <Root /> tests.
});
