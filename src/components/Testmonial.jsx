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
                {/* <h1>xxxx</h1> */}
                <p>Lorem ipsum dolor necessitatibus rerum, illo totam dolorum beatae ratione et. Quaerat rem neque veritatis?</p>
              {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
          </Swiper></Col>
      </Row>
    </Container>
       
       
      );
}

export default Testmonial