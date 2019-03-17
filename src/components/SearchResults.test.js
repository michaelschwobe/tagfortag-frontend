import React from 'react';
import { shallow } from 'enzyme';

// Local modules.
import SearchResults from './SearchResults';

// -----------------------------------------------------------------------------

describe('<SearchResults>', () => {
  test('shallow render', () => {
    shallow(<SearchResults itemComponent={() => {}} />);
  });

  // TODO: Write <SearchResults /> tests.
});
