const mapSearchParams = (search = '') => {
  const SearchParams = new URLSearchParams(search);

  const keyMap = {
    q: 'searchTerm',
    f: 'searchFilter',
    s: 'searchSort',
  };

  // Keys with comma delimited values.
  const iterableKeys = ['f', 's'];

  return Object.entries(keyMap).reduce((acc, [prevKey, nextKey]) => {
    // Get and ensure param is a String.
    let nextValue = SearchParams.get(prevKey) || '';

    // Check if param should be output as an Array.
    if (iterableKeys.includes(prevKey)) {
      // Ensure Array has valid values.
      nextValue = nextValue.split(',').filter(el => el != null);
    }

    // Create object with array values.
    return { ...acc, [nextKey]: nextValue };
  }, {});
};

export default mapSearchParams;
