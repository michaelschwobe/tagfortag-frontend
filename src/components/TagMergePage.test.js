import React from 'react';
import { shallow } from 'enzyme';

// Components.
import TagMergePage from './TagMergePage';

// -----------------------------------------------------------------------------

describe('<TagMergePage>', () => {
  test('shallow render', () => {
    shallow(<TagMergePage location={{ search: '' }} />);
  });

  // TODO: Write <TagMergePage /> tests.
});
