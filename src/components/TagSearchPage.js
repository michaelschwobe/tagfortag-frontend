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

// TODO: Write `getTags` Query (default: []).
const getTags = () => [
  { id: 'xxx', name: 'tagX', count: 2 },
  { id: 'yyy', name: 'tagY', count: 1 },
  { id: 'zzz', name: 'tagZ' },
];

// TODO: Write <TagSearchPage /> component.
const TagSearchPage = ({ location }) => {
  // Fetch all tag data.
  const tags = getTags();

  // Parse query params for initial form values.
  const searchParams = mapSearchParams(location.search);

  // Custom hook for <SearchForm>.
  const { term, setTerm, resetForm } = useSearchForm(searchParams);

  // Custom hook for <SearchResults> that optimizes search results.
  const searchResultsItems = useSearchResults({
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
        itemComponent={TagSearchResultsItem}
        items={searchResultsItems}
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
