// TODO: Remove eslint rules.
/* eslint-disable import/prefer-default-export */
export const getSearchParams = (search = '') => {
  const SearchParams = new URLSearchParams(search);

  const keyMap = { q: 'queries', f: 'filters', s: 'sequences' };

  return Object.entries(keyMap).reduce((acc, [prevKey, nextKey]) => {
    // Get and ensure param is a string.
    const str = SearchParams.get(prevKey) || '';
    // Ensure arrays have valid values.
    const arr = str.split(',').filter(el => el);
    // Create object with array values.
    return { ...acc, [nextKey]: arr };
  }, {});
};
