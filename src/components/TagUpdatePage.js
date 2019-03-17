import React from 'react';
import PropTypes from 'prop-types';

// Components.
import TagUpdateForm from './TagUpdateForm';

// -----------------------------------------------------------------------------

// TODO: Write `getTag` query.
const getTag = tagId => ({
  id: tagId,
  name: 'tagX',
  count: 3,
  createdAt: new Date(Date.now()).toDateString(),
  updatedAt: new Date(Date.now()).toDateString(),
});

// TODO: Update <TagUpdatePage /> component with `getTag`.
const TagUpdatePage = ({ match }) => {
  const { tagId } = match.params;
  const tag = getTag(tagId);

  return (
    <div>
      <TagUpdateForm initialValues={tag} />
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
