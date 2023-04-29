import React from 'react';
import QuatationForm from '../components/QuatationForm';
import { useContext, useState, useReducer, useEffect } from 'react';
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import Toaster from '../components/Toaster';
import LoadingSpinner from '../components/LoadingSpinner';
import '../css/marketplace.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING_PRODUCTS':
      return { ...state, loading: true };
    case 'FETCHING_COMPLETED':
      return { ...state, loading: false };
  }
};

function MarketPlace() {
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(false);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    // Fetching products from firebase collection
    const fetchProducts = async () => {
      dispatch({ type: 'FETCHING_PRODUCTS' });
      const productsCollectionref = collection(db, 'secondary-products');
      try {
        const data = await getDocs(productsCollectionref);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(filteredData);
        setStatus(true);
        setFilter(filteredData);
      } catch (err) {
        // *****************************  Error should be shown in Toast **********************************
        console.log(err);
        <Toaster />; //but need to check that component.
      }
      dispatch({ type: 'FETCHING_COMPLETED' });
    };
    fetchProducts();
  }, []);

  return (
    //price range filter min-max filter
    //catogeory check box filter
    //month used filter
    //side nav filter
    //open new page for that product
    //products each page for single product and related product sugesstion.
    //form design then second machine sell form request.
    <div>
      {loading && !filter ? (
        <div className="loading-spinner">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          {filter.length == 0 ? (
            <div className="sh-no-products">
              <h3>Currently there isn't any used products. Check back later</h3>
              <img
                src="https://img.freepik.com/free-vector/purchase-ban-online-store-website-error-cancel-buying-order-placing-inability-buy-limit-budget-line-online-buyer-cartoon-character_335657-1173.jpg?w=740&t=st=1682757448~exp=1682758048~hmac=f98f187d230bdfbcd5f8cc30aa5e2f014e0d32693776a9d528677ca7f4148359"
                alt=""
              />
            </div>
          ) : (
            <div className="sh-products">
              {' '}
              {filter.map((e, idx) => {
                return (
                  <div key={idx} className="sh-product">
                    {' '}
                  </div>
                );
              })}
            </div>
          )}
          <QuatationForm />
        </div>
      )}
    </div>
  );
}

export default MarketPlace;
