import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import '../css/footer.css';
const FooterBar = () => {

  const navigate = useNavigate();

  const goToMilk = () =>{
    navigate({
      pathname : '/products',
      search : '?category=milk'
    })
  }
  const goToCurd = () =>{
    navigate({
      pathname : '/products',
      search : '?category=curd'
    })
  }
  const goToPaneer = () =>{
    navigate({
      pathname : '/products',
      search : '?category=paneer'
    })
  }
  const goToYogurt = () =>{
    navigate({
      pathname : '/products',
      search : '?category=yogurt'
    })
  }


  return (
    <Container fluid className='footer-color-nav'>
       <Row>
        <Col className='foot-nav' xs={12} md={3}><h5>REFINDIA</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing oluptate magni nam temporibus maiores voluptatem nisi ab vitae id quod officia.</p></Col>
        <Col className='foot-nav' xs={12} md={3}>
          <h5>PRODUCTS</h5>
          <p onClick={goToMilk}>Milk Plant</p>
          <p onClick={goToCurd}>Curd Plant</p>
          <p onClick={goToPaneer}>Panner Plant</p>
          <p onClick={goToYogurt}>Yogurt Plant</p>

        </Col>
        <Col className='foot-nav'xs={12} md={3}>
          <h5>USEFULLINKS</h5>
          <p><Link to='/'>HOME</Link></p>
          <p><Link to="/products">PRODUCTS</Link></p>
          <p><Link to='/services'>SERVICES</Link></p>
          <p><Link to='/marketplace'>USED PRODUCTS</Link></p>
          <p><Link to='/gallery'>GALLERY</Link></p>
          <p><Link to='/about'>ABOUT US</Link></p>
          <p><Link to='/contact'>CONTACT US</Link></p>
        </Col>
        <Col xs={12} md={3} className='foot-nav'>
          <h5>CONTACT</h5>
          <table className='footer-table'>
            <tbody>
                <tr>
                  <td><i className="fa-solid fa-phone footer-icon"/></td>
                  <td><p>+91 1234567890</p></td>
                </tr>
                <tr>
                  <td><i className="fa-solid fa-envelope footer-icon"/></td>
                  <td><p>refindiatechnologies@gmail.com</p></td>
                </tr>
                <tr>
                  <td><i className="fa-solid fa-building footer-icon"/></td>
                  <td><p>5/64-E,Main Road,Neikkaranpatty, Ariyur PO, TK, Mohanur, Tamil Nadu 637015</p></td>
                </tr>
            </tbody>
          </table>
          <div className='social-icons'>
            <i className="fa-brands fa-facebook social-footer-icon"></i>
            <i className="fa-brands fa-instagram social-footer-icon"></i>
            <i className="fa-brands fa-youtube social-footer-icon"></i> 
          </div>
        </Col>
      </Row>
      {/* <Row></Row> it is for line and designed name*/}
    </Container>
  )
}

export default FooterBar