import React, { useContext, useEffect, useState, useReducer } from 'react';
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import '../css/productinfo.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoadingSpinner from '../components/LoadingSpinner';
import Toaster from '../components/Toaster';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING_PRODUCTS':
      return { ...state, loading: true };
    case 'FETCHING_COMPLETED':
      return { ...state, loading: false };
  }
};

const ProductInfo = () => {
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
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
            category = element['category'];
          }
        });
        finalData.forEach((element) => {
          if (element['category'] == category && element['id'] != productID) {
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
                      src={product.images[imageIndex]}
                      alt=""
                      className="product-image"
                    />
                  </div>

                  <div className="productinfo-preview-images">
                    {product.images.map((element, idx) => {
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
                <h4>{product.name}</h4>
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
                <p>{product.description}</p>
                <button className="product-info-btn" id="quote">
                  Get Latest Quote
                </button>
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