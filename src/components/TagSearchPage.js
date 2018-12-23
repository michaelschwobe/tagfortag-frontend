import React from 'react';
import PropTypes from 'prop-types';

// Utils.
import { getSearchParams } from '../utils/routerUtils';

// -----------------------------------------------------------------------------

// TODO: Write <TagSearchPage /> component.
const TagSearchPage = ({ location }) => {
  const { search } = location;
  const { queries, filters, sequences } = getSearchParams(search);

  return (
    <div>
      <div>TagSearchPage</div>
      <div>queries: {queries}</div>
      <div>filters: {filters}</div>
      <div>sequences: {sequences}</div>
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
