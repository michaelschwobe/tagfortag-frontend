import React from 'react';
import { cleanup, render } from 'react-testing-library';

// Components.
import UserSignInPage from './UserSignInPage';

// -----------------------------------------------------------------------------

describe('<UserSignInPage>', () => {
  afterEach(cleanup);

  it('Renders to the DOM', () => {
    render(<UserSignInPage />);
  });

  // TODO: Write <UserSignInPage /> tests.
});
