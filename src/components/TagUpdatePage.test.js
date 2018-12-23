import React from 'react';
import { shallow } from 'enzyme';

// Components.
import TagUpdatePage from './TagUpdatePage';

// -----------------------------------------------------------------------------

describe('<TagUpdatePage>', () => {
  test('shallow render', () => {
    shallow(<TagUpdatePage match={{ params: {} }} />);
  });

  // TODO: Write <TagUpdatePage /> tests.
});
