import React from 'react';
import PropTypes from 'prop-types';

// -----------------------------------------------------------------------------

// TODO: Write <SearchForm /> filters/sorting fields.
const SearchForm = ({ initialValues, handleTerm, handleReset }) => (
  <div role="search">
    <label htmlFor="term">
      <span>Search:</span>{' '}
      <input
        type="search"
        id="term"
        name="term"
        placeholder="Search for..."
        value={initialValues.term || ''}
        onChange={handleTerm}
      />
    </label>
    <button type="button" onClick={handleReset}>
      Reset search
    </button>
  </div>
);

SearchForm.propTypes = {
  initialValues: PropTypes.shape({
    term: PropTypes.string,
  }).isRequired,
  handleTerm: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

// SearchForm.defaultProps = {};

// -----------------------------------------------------------------------------

export default SearchForm;
