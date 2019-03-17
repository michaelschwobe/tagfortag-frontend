import React from 'react';
import PropTypes from 'prop-types';

// Components.
import TagCloneForm from './TagCloneForm';

// -----------------------------------------------------------------------------

// TODO: Update <TagClonePage /> with default, failure, success states.
const TagClonePage = ({ match }) => {
  const { tagId } = match.params;
  const initialValues = { currId: tagId };

  return (
    <div>
      <TagCloneForm initialValues={initialValues} />
    </div>
  );
};

TagClonePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tagId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

// TagClonePage.defaultProps = {};

// -----------------------------------------------------------------------------

export default TagClonePage;
