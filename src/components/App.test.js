import React from 'react';
import { cleanup, render } from 'react-testing-library';

// Components.
import App from './App';

// -----------------------------------------------------------------------------

describe('<App>', () => {
  afterEach(cleanup);

  it('Renders to the DOM', () => {
    render(<App />);
  });

  // TODO: Write <App /> tests.
});
