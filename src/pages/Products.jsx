import React from 'react';
import { useContext, useState, useReducer, useEffect } from 'react';
import { store } from '../store';
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING_PRODUCTS':
      return { ...state, loading: true };
    case 'FETCHING_COMPLETED':
      return { ...state, loading: false };
  }
};

function Products() {
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });
  const { state, dispatch: ctxDispatch } = useContext(store);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching products from firebase collection
    const fetchProducts = async () => {
      dispatch({ type: 'FETCHING_PRODUCTS' });
      const productsCollectionref = collection(db, 'products');
      try {
        const data = await getDocs(productsCollectionref);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(filteredData);
        ctxDispatch({ type: 'SAVE_PRODUCTS', payload: filteredData });
      } catch (err) {
        // *****************************  Error should be shown in Toast **********************************
        console.log(err);
      }
      dispatch({ type: 'FETCHING_COMPLETED' });
    };
    fetchProducts();
  }, []);

  return <div> {loading ? <div>Loading....</div> : <div>Products</div>} </div>;
}

export default Products;
