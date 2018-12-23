import React from 'react';
import PropTypes from 'prop-types';

// -----------------------------------------------------------------------------

// TODO: Write <TagMergePage /> component.
const TagMergePage = ({ match }) => {
  const { tagId } = match.params;

  return <div>TagMergePage tagId: {tagId}</div>;
};

TagMergePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tagId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

// TagMergePage.defaultProps = {};

// -----------------------------------------------------------------------------

export default TagMergePage;
