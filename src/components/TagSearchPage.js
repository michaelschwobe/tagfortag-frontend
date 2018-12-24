import React from 'react';
import PropTypes from 'prop-types';

// Utils.
import { getSearchParams } from '../utils/routerUtils';

// -----------------------------------------------------------------------------

// TODO: Write <TagSearchPage /> component.
const TagSearchPage = ({ location }) => {
  // Parse query params for initial form values.
  const { searchTerm, searchFilter, searchSort } = getSearchParams(
    location.search,
  );

  return (
    <div>
      <div>TagSearchPage</div>
      <div>searchTerm: {searchTerm}</div>
      <div>searchFilter: {searchFilter}</div>
      <div>searchSort: {searchSort}</div>
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
