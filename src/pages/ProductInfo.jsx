import React, { useContext, useEffect, useState, useReducer } from 'react';
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import '../css/productinfo.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoadingSpinner from '../components/LoadingSpinner';
import Toaster from '../components/Toaster';
// import PaytmButton from '../components/PaytmButton';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING_PRODUCTS':
      return { ...state, loading: true };
    case 'FETCHING_COMPLETED':
      return { ...state, loading: false };
    case 'PAY_REQUEST':
      return { ...state, loadingPay: true };
    case 'PAY_SUCCESS':
      return { ...state, loadingPay: false, successPay: true };
    case 'PAY_FAIL':
      return { ...state, loadingPay: false };
    case 'PAY_RESET':
      return { ...state, loadingPay: false, successPay: false };
    default:
      return state;
  }
};

const ProductInfo = () => {
  const [{ loading, error, order, successPay, loadingPay }, dispatch] =
    useReducer(reducer, {
      loading: true,
      order: {},
      error: '',
      successPay: false,
      loadingPay: false,
    });

  const [product, setProduct] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'FETCHING_PRODUCTS' });
      const productID = window.location.pathname.split('/')[2];
      var temp = [];
      var category = '';
      const productsCollectionref = collection(db, 'products');
      try {
        const data = await getDocs(productsCollectionref);
        const finalData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        finalData.forEach((element) => {
          if (element['id'] == productID) {
            setProduct(element);
            category = element['product_category'];
          }
        });
        finalData.forEach((element) => {
          if (
            element['product_category'] == category &&
            element['id'] != productID
          ) {
            temp.push(element);
          }
        });
        if (temp.length == 0) {
          finalData.forEach((element) => {
            if (element['id'] != productID) {
              temp.push(element);
            }
          });
        }
        setRelatedProduct(temp);
      } catch (err) {
        // *****************************  Error should be shown in Toast **********************************
        console.log(err);
        <Toaster />; //but need to check that component.
      }
    };
    fetchProducts();
    dispatch({ type: 'FETCHING_COMPLETED' });
  }, []);

  return (
    <div className="page">
      {loading || !product ? (
        <div className="loading-spinner">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="product-container">
          <Container fluid>
            <Row className="product-row">
              <Col md={6} xs={12}>
                <div className="productinfo-images">
                  <div className="productinfo-preview-image">
                    <img
                      src={product['product_img'][imageIndex]}
                      alt=""
                      className="product-image"
                    />
                  </div>

                  <div className="productinfo-preview-images">
                    {product['product_img'].map((element, idx) => {
                      return (
                        <div
                          onClick={() => setImageIndex(idx)}
                          className="productinfo-preview-images-side"
                        >
                          <img
                            src={element}
                            alt=""
                            className="product-preview-image"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <table>
                  <tbody>
                    {product['product_details_name'].map((e, idx) => {
                      return (
                        <tr>
                          <td> {e}</td>
                          <td>{product['product_details_value'][idx]}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {/* <h4>{product.name}</h4>
                <h6>{product.cost}</h6>
                <table>
                  <tr>
                    <td>Category</td>
                    <td>{product.category}</td>
                  </tr>
                  <tr>
                    <td>Material</td>
                    <td>{product.material}</td>
                  </tr>
                  <tr>
                    <td>AutoMatic Grade</td>
                    <td>{product.automatic_grade}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{product.category}</td>
                  </tr>
                </table>
                <p>{product.description}</p> */}
                <button className="product-info-btn" id="quote">
                  Get Latest Quote
                </button>
                {/* <PaytmButton /> */}
              </Col>
            </Row>
            <Row>
              <h5 className="related-products-header">Similar Products</h5>
              <div className="related-products">
                {relatedProduct.map((e, idx) => {
                  return <Col lg={4} md={3} xs={12} key={idx}></Col>;
                })}
              </div>
            </Row>
          </Container>
        </div>
      )}
      {/* <QuatationForm/> */}
    </div>
  );
};
//probelm is occuring while setting relatedProduct state.
export default ProductInfo;
//addproducts//update//edit//crud
//CRM//manual entry for customers
//secondhand product//add products
//email//verfication//customers
