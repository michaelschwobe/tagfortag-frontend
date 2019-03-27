import React from 'react';
import { shallow } from 'enzyme';

// Local modules.
import TagDeletePage from './TagDeletePage';

// -----------------------------------------------------------------------------

describe('<TagDeletePage>', () => {
  test('shallow render', () => {
    shallow(<TagDeletePage match={{ params: {} }} />);
  });

  // TODO: Write <TagDeletePage /> tests.
});
