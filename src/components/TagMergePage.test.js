import React from 'react';
import { shallow } from 'enzyme';

// Local modules.
import TagMergePage from './TagMergePage';

// -----------------------------------------------------------------------------

describe('<TagMergePage>', () => {
  test('shallow render', () => {
    shallow(<TagMergePage match={{ params: {} }} />);
  });

  // TODO: Write <TagMergePage /> tests.
});
