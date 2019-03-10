// Local modules.
import mapSearchParams from './mapSearchParams';

// -----------------------------------------------------------------------------

describe('routerUtils', () => {
  describe('mapSearchParams', () => {
    test('returns default values', () => {
      expect(mapSearchParams()).toEqual({
        term: '',
        filters: [],
        sorts: [],
      });
    });

    test('returns custom values', () => {
      expect(mapSearchParams('?q=q&f=f1,f2&s=s1,s2&someKey=someValue')).toEqual(
        {
          term: 'q',
          filters: ['f1', 'f2'],
          sorts: ['s1', 's2'],
        },
      );
    });
  });
});
