import React from 'react';
import { shallow } from 'enzyme';

// Components.
import SearchForm from './SearchForm';

// -----------------------------------------------------------------------------

describe('<SearchForm>', () => {
  test('shallow render', () => {
    shallow(
      <SearchForm
        initialValues={{}}
        handleTerm={() => {}}
        handleReset={() => {}}
      />,
    );
  });

  // TODO: Write <SearchForm /> tests.
});
