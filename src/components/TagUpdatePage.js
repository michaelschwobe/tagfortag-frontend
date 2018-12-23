import React from 'react';
import PropTypes from 'prop-types';

// -----------------------------------------------------------------------------

// TODO: Write <TagUpdatePage /> component.
const TagUpdatePage = ({ match }) => {
  const { tagId } = match.params;

  return <div>TagUpdatePage tagId: {tagId}</div>;
};

TagUpdatePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tagId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

// TagUpdatePage.defaultProps = {};

// -----------------------------------------------------------------------------

export default TagUpdatePage;
