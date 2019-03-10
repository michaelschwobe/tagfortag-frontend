// Local modules.
import mapSearchParams from './mapSearchParams';

// -----------------------------------------------------------------------------

describe('routerUtils', () => {
  describe('mapSearchParams', () => {
    test('returns default values', () => {
      expect(mapSearchParams()).toEqual({
        searchTerm: '',
        searchFilter: [],
        searchSort: [],
      });
    });

    test('returns custom values', () => {
      expect(mapSearchParams('?q=q&f=f1,f2&s=s1,s2&someKey=someValue')).toEqual(
        {
          searchTerm: 'q',
          searchFilter: ['f1', 'f2'],
          searchSort: ['s1', 's2'],
        },
      );
    });
  });
});
