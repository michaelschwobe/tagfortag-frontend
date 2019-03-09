import React from 'react';
import PropTypes from 'prop-types';

// Local modules.
import TagCloneForm from './TagCloneForm';

// -----------------------------------------------------------------------------

// TODO: Write <TagClonePage /> component.
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
