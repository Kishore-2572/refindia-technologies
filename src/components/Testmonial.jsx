import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../css/testmonial.css";
import profile from '../assets/images/profile.png'

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Testmonial = () => {
    return (
      <Container>
        <Row  className="testmonial-header" style={{}}>
              <h2 className="testmonial-heading">What Clients Say</h2>
              <p className="testmonial-text">We place huge value on strong relationships and have seen the benefit they bring to our business. Customer feedback is vital in helping us to get it right.</p>
        </Row>
      <Row>
        <Col>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <p className="testimonial-comment">modi odio fugit quaerat, amet, reiciendis sequi impedit vitae porro. Consequatur autem libero, architecto assumenda facilis eius dolorum?</p>
              </div>
              <div className="testmonial-card">
                <div className="testmonial-card-user-image">
                  <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" alt="" />
                </div>
                <div className="testmonial-card-customer">
                  <h6>customer name</h6>
                  <p>plant name</p>
                </div>
              </div> 
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p className="testimonial-comment">modi odio fugit quaerat, amet, reiciendis sequi impedit vitae porro. Consequatur autem libero, architecto assumenda facilis eius dolorum?</p>
              </div>
              <div className="testmonial-card">
                <div className="testmonial-card-user-image">
                  <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" alt="" />
                </div>
                <div className="testmonial-card-customer">
                  <h6>customer name</h6>
                  <p>plant name</p>
                </div>
              </div> 
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p className="testimonial-comment">modi odio fugit quaerat, amet, reiciendis sequi impedit vitae porro. Consequatur autem libero, architecto assumenda facilis eius dolorum?</p>
              </div>
              <div className="testmonial-card">
                <div className="testmonial-card-user-image">
                  <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" alt="" />
                </div>
                <div className="testmonial-card-customer">
                  <h6>customer name</h6>
                  <p>plant name</p>
                </div>
              </div> 
            </SwiperSlide><SwiperSlide>
              <div>
                <p className="testimonial-comment">modi odio fugit quaerat, amet, reiciendis sequi impedit vitae porro. Consequatur autem libero, architecto assumenda facilis eius dolorum?</p>
              </div>
              <div className="testmonial-card">
                <div className="testmonial-card-user-image">
                  <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" alt="" />
                </div>
                <div className="testmonial-card-customer">
                  <h6>customer name</h6>
                  <p>plant name</p>
                </div>
              </div> 
            </SwiperSlide><SwiperSlide>
              <div>
                <p className="testimonial-comment">modi odio fugit quaerat, amet, reiciendis sequi impedit vitae porro. Consequatur autem libero, architecto assumenda facilis eius dolorum?</p>
              </div>
              <div className="testmonial-card">
                <div className="testmonial-card-user-image">
                  <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" alt="" />
                </div>
                <div className="testmonial-card-customer">
                  <h6>customer name</h6>
                  <p>plant name</p>
                </div>
              </div> 
            </SwiperSlide><SwiperSlide>
              <div>
                <p className="testimonial-comment">modi odio fugit quaerat, amet, reiciendis sequi impedit vitae porro. Consequatur autem libero, architecto assumenda facilis eius dolorum?</p>
              </div>
              <div className="testmonial-card">
                <div className="testmonial-card-user-image">
                  <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" alt="" />
                </div>
                <div className="testmonial-card-customer">
                  <h6>customer name</h6>
                  <p>plant name</p>
                </div>
              </div> 
            </SwiperSlide>
            <SwiperSlide>
              
            </SwiperSlide>
            <SwiperSlide>
              
            </SwiperSlide>
            <SwiperSlide>

            </SwiperSlide>
          </Swiper></Col>
      </Row>
    </Container>
       
       
      );
}

export default Testmonial