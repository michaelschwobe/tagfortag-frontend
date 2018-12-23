import React from 'react';
import { shallow } from 'enzyme';

// Components.
import TagReadPage from './TagReadPage';

// -----------------------------------------------------------------------------

describe('<TagReadPage>', () => {
  test('shallow render', () => {
    shallow(<TagReadPage match={{ params: {} }} />);
  });

  // TODO: Write <TagReadPage /> tests.
});
