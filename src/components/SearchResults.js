import React from 'react';
import PropTypes from 'prop-types';

// -----------------------------------------------------------------------------

// TODO: Write <SearchResults /> component.
const SearchResults = ({ itemComponent: Item, items }) => {
  if (!Array.isArray(items) || !items.length) {
    return (
      <div>
        <p>Your search did not match anything.</p>
        <p>Suggestions:</p>
        <ul>
          <li>Make sure all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords.</li>
          <li>Try fewer keywords.</li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <p>Your search matched {items.length} results.</p>
      <ol>
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ol>
    </div>
  );
};

SearchResults.propTypes = {
  itemComponent: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

SearchResults.defaultProps = {
  items: [],
};

// -----------------------------------------------------------------------------

export default SearchResults;
