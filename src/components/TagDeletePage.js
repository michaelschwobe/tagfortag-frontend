import React from 'react';
import PropTypes from 'prop-types';

// Components.
import TagDeleteForm from './TagDeleteForm';

// -----------------------------------------------------------------------------

// TODO: Write <TagDeletePage /> component.
const TagDeletePage = ({ match }) => {
  const { tagId } = match.params;
  const initialValues = { id: tagId };

  return (
    <div>
      <TagDeleteForm initialValues={initialValues} />
    </div>
  );
};

TagDeletePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tagId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

// TagDeletePage.defaultProps = {};

// -----------------------------------------------------------------------------

export default TagDeletePage;
