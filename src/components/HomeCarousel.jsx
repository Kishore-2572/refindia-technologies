import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import '../css/homecarousel.css'
import img1 from '../assets/images/page 1-01.png'
import img2 from '../assets/images/page 2-01.png'
import img3 from '../assets/images/page 3-01.png'

export default function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption style={{bottom:"3rem"}} className='cc-1'>
          {/* <h3>Who We Are?</h3>
          <p>
            “Refindia Technologies” is instrumental as the manufacturer in this
            industry since 2018. The main headquarter of our company is situated
            in Namakkal, Tamil Nadu.
          </p> */}
          <button className='carousel-button'>
            <Link to="/about">Explore More</Link>{' '}
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption style={{bottom:"3rem"}} className='cc-2'>
          {/* <h3>What We Do?</h3>
          <p>
            we offer to our customers are Milk Condensing Machine, Curd Making
            Plant and all kind of dairy machinaries.
          </p> */}
          <button className='carousel-button'>
            <Link to="/services">What We Offer</Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption style={{bottom:"3rem"}} className='cc-1'>
          {/* <h3>Where We're Going</h3>
          <p>
            “We don't build a business, We build people, then people build the
            business.”
          </p> */}
          <button className='carousel-button'>
            <Link to="/products">Grow together</Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
