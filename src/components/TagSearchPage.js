import React from 'react';
import PropTypes from 'prop-types';

// Utils.
import mapSearchParams from '../utils/mapSearchParams';

// -----------------------------------------------------------------------------

// TODO: Write <TagSearchPage /> component.
const TagSearchPage = ({ location }) => {
  // Parse query params for initial form values.
  const { searchTerm, searchFilter, searchSort } = mapSearchParams(location.search);

  return (
    <div>
      <div>TagSearchPage</div>
      <div>searchTerm: {searchTerm}</div>
      <div>searchFilter: {JSON.stringify(searchFilter, null, 2)}</div>
      <div>searchSort: {JSON.stringify(searchSort, null, 2)}</div>
    </div>
  );
};

TagSearchPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

// TagSearchPage.defaultProps = {};

// -----------------------------------------------------------------------------

export default TagSearchPage;
