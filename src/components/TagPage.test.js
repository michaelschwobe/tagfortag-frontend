import React from 'react';
import { cleanup, render } from 'react-testing-library';

// Components.
import TagPage from './TagPage';

// -----------------------------------------------------------------------------

describe('<TagPage>', () => {
  afterEach(cleanup);

  it('Renders to the DOM', () => {
    render(<TagPage />);
  });

  // TODO: Write <TagPage /> tests.
});
