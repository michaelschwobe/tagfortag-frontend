import React from 'react';
import PropTypes from 'prop-types';

// -----------------------------------------------------------------------------

// TODO: Write <TagReadPage /> component.
const TagReadPage = ({ match }) => {
  const { tagId } = match.params;

  return <div>TagReadPage tagId: {tagId}</div>;
};

TagReadPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tagId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

// TagReadPage.defaultProps = {};

// -----------------------------------------------------------------------------

export default TagReadPage;
