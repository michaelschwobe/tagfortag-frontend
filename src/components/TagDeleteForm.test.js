import React from 'react';
import { shallow } from 'enzyme';

// Local modules.
import TagDeleteForm from './TagDeleteForm';

// -----------------------------------------------------------------------------

describe('<TagDeleteForm>', () => {
  test('shallow render', () => {
    shallow(<TagDeleteForm initialValues={{ id: '' }} />);
  });

  // TODO: Write <TagDeleteForm /> tests.
});
