import React from 'react';
import PropTypes from 'prop-types';

// Components.
import TagMergeForm from './TagMergeForm';

// -----------------------------------------------------------------------------

// TODO: Update <TagMergePage /> with default, failure, success states.
const TagMergePage = ({ match }) => {
  const { tagId } = match.params;
  const initialValues = { currId: tagId };

  return (
    <div>
      <TagMergeForm initialValues={initialValues} />
    </div>
  );
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
