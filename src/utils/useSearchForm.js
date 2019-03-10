import { useReducer } from 'react';

// -----------------------------------------------------------------------------

export const init = ({ term = '', filters = [], sorts = [] }) => ({
  term,
  filters,
  sorts,
});

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setTerm':
      return { ...state, term: action.payload };
    case 'resetForm':
      return init(action.payload);
    default:
      throw new Error();
  }
};

const useSearchForm = initialState => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const setTerm = event =>
    dispatch({ type: 'setTerm', payload: event.target.value });

  const resetForm = () =>
    dispatch({ type: 'resetForm', payload: initialState });

  return {
    term: state.term,
    filters: state.filters,
    sorts: state.sorts,
    setTerm,
    resetForm,
  };
};

// -----------------------------------------------------------------------------

export default useSearchForm;
