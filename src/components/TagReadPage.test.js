import React from 'react';
import { shallow } from 'enzyme';

// Local modules.
import TagReadPage from './TagReadPage';

// -----------------------------------------------------------------------------

describe('<TagReadPage>', () => {
  test('shallow render', () => {
    shallow(<TagReadPage match={{ params: { tagId: '' }, url: '' }} />);
  });

  // TODO: Write <TagReadPage /> tests.
});
