import React from 'react';
import { shallow } from 'enzyme';

// Components.
import TagClonePage from './TagClonePage';

// -----------------------------------------------------------------------------

describe('<TagClonePage>', () => {
  test('shallow render', () => {
    shallow(<TagClonePage match={{ params: {} }} />);
  });

  // TODO: Write <TagClonePage /> tests.
});
