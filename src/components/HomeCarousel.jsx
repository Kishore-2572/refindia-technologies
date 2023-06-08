import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import '../css/homecarousel.css';
import img1 from '../assets/images/page 1-01.png';
import img2 from '../assets/images/page 2-01.png';
import img3 from '../assets/images/page 3-01.png';

export default function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={img1} alt="First slide" />
          <div className="carousel-button cc-1">
            <Link to="/about">Explore More</Link>{' '}
          </div>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={img2} alt="Second slide" />
          <div className="carousel-button cc-2">
            <Link to="/services">What We Offer</Link>
          </div>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={img3} alt="Third slide" />
          <div className="carousel-button cc-3">
            <Link to="/products">Grow together</Link>
          </div>
      </Carousel.Item>
    </Carousel>
  );
}
