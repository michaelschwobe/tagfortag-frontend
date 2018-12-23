import React from 'react';
import { shallow } from 'enzyme';

// Components.
import TagSearchPage from './TagSearchPage';

// -----------------------------------------------------------------------------

describe('<TagSearchPage>', () => {
  test('shallow render', () => {
    shallow(<TagSearchPage location={{ search: '' }} />);
  });

  // TODO: Write <TagSearchPage /> tests.
});
