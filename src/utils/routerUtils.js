// TODO: Remove eslint rules.
/* eslint-disable import/prefer-default-export */
export const getSearchParams = (search = '') => {
  const SearchParams = new URLSearchParams(search);

  const keyMap = {
    q: 'searchTerm',
    f: 'searchFilter',
    s: 'searchSort',
    a: 'mergeFrom',
    b: 'mergeInto',
  };

  const keysWithArrayAsOutput = ['f', 's'];

  return Object.entries(keyMap).reduce((acc, [prevKey, nextKey]) => {
    // Get and ensure param is a String.
    let nextValue = SearchParams.get(prevKey) || '';

    // Check if param should be output as an Array.
    if (keysWithArrayAsOutput.includes(prevKey)) {
      // Ensure Array has valid values.
      nextValue = nextValue.split(',').filter(el => el);
    }

    // Create object with array values.
    return { ...acc, [nextKey]: nextValue };
  }, {});
};
