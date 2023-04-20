import React from 'react';
import { useContext, useState, useReducer, useEffect } from 'react';
import { store } from '../store';
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import LoadingSpinner from '../components/LoadingSpinner';
import Toaster from '../components/Toaster';
import '../css/products.css';

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
        <Toaster />; //but need to check that component.
      }
      dispatch({ type: 'FETCHING_COMPLETED' });
    };
    fetchProducts();
  }, []);
  // console.log(products);
  //time of loading is too short.
  return <div className='products' > {loading ? <div className='loading-spinner'><LoadingSpinner/></div> : <div>  {products.map((e,idx) =>{
    return <div>{e.name}</div>
    // return <Products key={idx}  data={e}/>
  })} </div>} </div>;
}

export default Products;
