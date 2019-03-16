import React from 'react';
import PropTypes from 'prop-types';

// Local modules.
import SearchResultsHelp from './SearchResultsHelp';

// -----------------------------------------------------------------------------

// TODO: Write <SearchResults /> component.
const SearchResults = ({ value, items, itemComponent: Item }) => {
  if (!value) {
    return (
      <div>
        <h2>Please type a keyword to search.</h2>
        <SearchResultsHelp />
      </div>
    );
  }

  if (!Array.isArray(items) || !items.length) {
    return (
      <div>
        <h2>
          Your search - <em>{value}</em> - did not match anything.
        </h2>
        <SearchResultsHelp />
      </div>
    );
  }

  return (
    <div>
      <h2>Your search matched {items.length} results.</h2>
      <ol>
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ol>
    </div>
  );
};

SearchResults.propTypes = {
  value: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ),
  itemComponent: PropTypes.func.isRequired,
};

SearchResults.defaultProps = {
  value: '',
  items: [],
};

// -----------------------------------------------------------------------------

export default SearchResults;
