import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import '../css/homecarousel.css'

export default function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1679687209792-7199bf448377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Who We Are?</h3>
          <p>
            “Refindia Technologies” is instrumental as the manufacturer in this
            industry since 2018. The main headquarter of our company is situated
            in Namakkal, Tamil Nadu.
          </p>
          <button className='carousel-button'>
            <Link to="/about">Know more about us</Link>{' '}
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1569443706499-47491954bf45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>What We Do?</h3>
          <p>
            we offer to our customers are Milk Condensing Machine, Curd Making
            Plant and all kind of dairy machinaries.
          </p>
          <button className='carousel-button'>
            <Link to="/services">Know more about our Services</Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1520986840182-5b15f734c85c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Where We're Going</h3>
          <p>
            “We don't build a business, We build people, then people build the
            business.”
          </p>
          <button className='carousel-button'>
            <Link to="/products">Grow together</Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
