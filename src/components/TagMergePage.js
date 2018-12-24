import React from 'react';
import PropTypes from 'prop-types';

// Utils.
import { getSearchParams } from '../utils/routerUtils';

// Local modules.
import TagMergeForm from './TagMergeForm';

// -----------------------------------------------------------------------------

// TODO: Write <TagMergePage /> component.
const TagMergePage = ({ location }) => {
  // Parse query params for initial form values.
  const { mergeFrom, mergeInto } = getSearchParams(location.search);
  const initialValues = { from: mergeFrom, into: mergeInto };

  return (
    <div>
      <TagMergeForm initialValues={initialValues} />
    </div>
  );
};

TagMergePage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

// TagMergePage.defaultProps = {};

// -----------------------------------------------------------------------------

export default TagMergePage;
