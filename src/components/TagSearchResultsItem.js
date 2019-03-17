import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// -----------------------------------------------------------------------------

// TODO: Update <TagSearchResultsItem /> component with <Icon type="tag" />.
const TagSearchResultsItem = ({ id, name, count }) => (
  <li>
    <Link to={`/tags/${id}`}>
      <span>Icon</span> <span>{name}</span> <span>{count}</span>
    </Link>
  </li>
);

TagSearchResultsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number,
};

TagSearchResultsItem.defaultProps = {
  count: 0,
};

// -----------------------------------------------------------------------------

export default TagSearchResultsItem;
