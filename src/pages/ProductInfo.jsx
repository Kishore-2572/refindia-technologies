import React, { useContext, useEffect, useState } from 'react'
import { store } from '../store';
import '../css/productinfo.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuatationForm from '../components/QuatationForm';
var empty=[];
const ProductInfo = () => {
    const { state, dispatch: ctxDispatch } = useContext(store);
    const {products} = state;
    const [product,setProduct]=useState([])
    const [relatedProduct,setRelatedProduct]=useState([]);
    useEffect(() => {
        products.forEach(element => {
            if(element['id'] == window.location.pathname.split("/")[2]) setProduct(element);
        })
        console.log(product);
    },[]);
    //this is need to be updated.
    // function related(){
    //   products.filter(e=>{
    //     if(e['category']==product['category']&&e['id']!=product.id) empty.push(e);
    //     // console.log(e['name']+"=============")
    //     // setRelatedProduct(e)
    //   })
    //   console.log(empty)
    // }
    // related();
  return (
    <div className='page'>
      <div className='product-container my-2'>
        <Container fluid>
          <Row className='product-row'>
            <Col md={4} xs={12}>
              <img src={product.image} alt="" className='product-image' width="100%" height="350px"/>
            </Col>
            <Col md={4} xs={12}>
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
                  <td>{product['automatic grade']}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{product.category}</td>
                </tr>
              </table>
              <p>{product.description}</p>
              <button className='product-info-btn'>Full Details</button>
              <button className='product-info-btn' id='quote'>Get Latest Quote</button>
            </Col>
            <Col md={4} xs={12}>
              <h5>Related Products</h5>
              <div className='related-products'>
                <div>
                  {/* {empty[0]} */}
                </div>
                <div>
                  
                </div>
                <div>
                  
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <QuatationForm/> */}
    </div>
  )
}
//probelm is occuring while setting relatedProduct state.
export default ProductInfo