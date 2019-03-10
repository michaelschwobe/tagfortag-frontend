import { useMemo } from 'react';
import fuzzaldrin from 'fuzzaldrin-plus';

// -----------------------------------------------------------------------------

// TODO: Add filters and sorting to `useSearchResults`.
const useSearchResults = ({ candidates, query, options }) =>
  useMemo(() => fuzzaldrin.filter(candidates, query, options), [
    candidates,
    query,
    options,
  ]);

// -----------------------------------------------------------------------------

export default useSearchResults;
