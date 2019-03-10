import React from 'react';
import PropTypes from 'prop-types';

// -----------------------------------------------------------------------------

// TODO: Write <SearchForm /> component.
const SearchForm = ({ initialValues, handleTerm, handleReset }) => (
  <div role="search">
    <label htmlFor="term">
      <span>Search:</span>{' '}
      <input
        type="search"
        id="term"
        name="term"
        placeholder="search for..."
        value={initialValues.term}
        onChange={handleTerm}
      />
    </label>
    <button type="button" onClick={handleReset}>
      Reset search
    </button>
  </div>
);

/*
  eslint-disable
    react/require-default-props,
    react/default-props-match-prop-types
 */
SearchForm.propTypes = {
  initialValues: PropTypes.shape({
    term: PropTypes.string,
  }).isRequired,
  handleTerm: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  initialValues: {
    term: '',
  },
};

// -----------------------------------------------------------------------------

export default SearchForm;
