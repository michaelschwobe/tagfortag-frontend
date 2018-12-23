// Local modules.
import { getSearchParams } from './routerUtils';

// -----------------------------------------------------------------------------

describe('routerUtils', () => {
  describe('getSearchParams', () => {
    test('returns default values', () => {
      expect(getSearchParams()).toEqual({
        queries: [],
        filters: [],
        sequences: [],
      });
    });

    test('returns custom values', () => {
      expect(
        getSearchParams('?q=q1,q2&f=f1,f2&s=s1,s2&someKey=someValue'),
      ).toEqual({
        queries: ['q1', 'q2'],
        filters: ['f1', 'f2'],
        sequences: ['s1', 's2'],
      });
    });
  });
});
