import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// -----------------------------------------------------------------------------

// TODO: Write `getTag` query.
const getTag = tagId => ({
  id: tagId,
  name: 'tagA',
  count: 3,
  createdAt: new Date(Date.now()).toDateString(),
  updatedAt: new Date(Date.now()).toDateString(),
});

// TODO: Write <TagReadPage /> component.
const TagReadPage = ({ match }) => {
  const { tagId } = match.params;
  const tag = getTag(tagId);

  return (
    <div>
      <h1>{tag.name}</h1>
      <dl>
        <dt>Id</dt>
        <dd>{tag.id}</dd>
        <dt>Relationships</dt>
        <dd>{tag.count}</dd>
        <dt>Created on</dt>
        <dd>{tag.createdAt}</dd>
        <dt>Updated on</dt>
        <dd>{tag.updatedAt}</dd>
      </dl>
      <p>
        <Link to={`${match.url}/edit`}>Edit Tag</Link>{' '}
        <Link to={`${match.url}/merge`}>Merge Tag</Link>{' '}
        <Link to={`${match.url}/clone`}>Clone Tag</Link>{' '}
        <Link to={`${match.url}/delete`}>Delete Tag</Link>
      </p>
      <p>
        Search for:{' '}
        <Link
          to={{
            pathname: '/tags',
            search: `?q=${tag.name}&s=date`,
          }}
        >
          Latest Bookmarks
        </Link>{' '}
        <Link
          to={{
            pathname: '/tags',
            search: `?q=${tag.name}&s=count,date`,
          }}
        >
          Popular Bookmarks
        </Link>{' '}
      </p>
    </div>
  );
};

TagReadPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tagId: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

// TagReadPage.defaultProps = {};

// -----------------------------------------------------------------------------

export default TagReadPage;
