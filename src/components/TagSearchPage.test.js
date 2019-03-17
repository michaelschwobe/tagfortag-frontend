import React from 'react';
import { shallow } from 'enzyme';

// Local modules.
import TagSearchPage from './TagSearchPage';

// -----------------------------------------------------------------------------

describe('<TagSearchPage>', () => {
  test('shallow render', () => {
    shallow(<TagSearchPage location={{ search: '' }} />);
  });

  // TODO: Write <TagSearchPage /> tests.
});
