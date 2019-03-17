import React from 'react';
import { shallow } from 'enzyme';

// Local modules.
import TagUpdateForm from './TagUpdateForm';

// -----------------------------------------------------------------------------

describe('<TagUpdateForm>', () => {
  test('shallow render', () => {
    shallow(<TagUpdateForm initialValues={{ name: '' }} />);
  });

  // TODO: Write <TagUpdateForm /> tests.
});
