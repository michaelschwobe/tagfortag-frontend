// Local modules.
import { getSearchParams } from './routerUtils';

// -----------------------------------------------------------------------------

describe('routerUtils', () => {
  describe('getSearchParams', () => {
    test('returns default values', () => {
      expect(getSearchParams()).toEqual({
        searchTerm: '',
        searchFilter: [],
        searchSort: [],
      });
    });

    test('returns custom values', () => {
      expect(getSearchParams('?q=q&f=f1,f2&s=s1,s2&someKey=someValue')).toEqual(
        {
          searchTerm: 'q',
          searchFilter: ['f1', 'f2'],
          searchSort: ['s1', 's2'],
        },
      );
    });
  });
});
