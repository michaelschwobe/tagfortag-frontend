import React from 'react';
import PropTypes from 'prop-types';

// Local modules.
import TagUpdateForm from './TagUpdateForm';

// -----------------------------------------------------------------------------

// TODO: Write <TagUpdatePage /> component.
const TagUpdatePage = ({ match }) => {
  const { tagId } = match.params;

  return (
    <div>
      <div>TagUpdatePage tagId: {tagId}</div>
      <TagUpdateForm initialValues={{ name: '' }} />
    </div>
  );
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
