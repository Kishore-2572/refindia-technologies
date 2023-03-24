import { createContext, useReducer } from 'react';

export const store = createContext();

const initialState = {
  products: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SAVE_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

export function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <store.Provider value={value}>{props.children}</store.Provider>;
}
