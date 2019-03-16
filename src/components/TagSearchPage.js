import React from 'react';
import PropTypes from 'prop-types';

// Utils.
import mapSearchParams from '../utils/mapSearchParams';
import useSearchForm from '../utils/useSearchForm';
import useSearchResults from '../utils/useSearchResults';

// Components.
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import TagSearchResultsItem from './TagSearchResultsItem';

// -----------------------------------------------------------------------------

// TODO: Write `getTags` Query.
// Failure: `{ status, message }`
// Success: `[{ id: 'xxx', name: 'tagX', count: 2 }, ...]`
const getTags = () =>
  Array.from({ length: 1000 }, (el, idx) => ({
    id: `${idx}`,
    name: `tag${idx}`,
    count: Math.floor(Math.random() * 30) + 0,
  }));

// TODO: Write <TagSearchPage /> component.
const TagSearchPage = ({ location }) => {
  // Fetch all tag data.
  const tags = getTags();

  // Parse query params for initial form values.
  const searchParams = mapSearchParams(location.search);

  // Custom hook for <SearchForm>.
  const { term, setTerm, resetForm } = useSearchForm(searchParams);

  // Custom hook for <SearchResults> that optimizes search results.
  const searchResults = useSearchResults({
    candidates: tags,
    query: term,
    options: {
      key: 'name',
      // maxResults: 100,
    },
  });

  return (
    <div>
      <h1>Search Tags</h1>
      <SearchForm
        initialValues={{ term }}
        handleTerm={setTerm}
        handleReset={resetForm}
      />
      <SearchResults
        value={term}
        items={searchResults}
        itemComponent={TagSearchResultsItem}
      />
    </div>
  );
};

TagSearchPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

// TagSearchPage.defaultProps = {};

// -----------------------------------------------------------------------------

export default TagSearchPage;
