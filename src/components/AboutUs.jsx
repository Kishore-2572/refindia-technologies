import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import refindia from '../assets/images/refindia.png';
import '../css/about.css';
import TeamMemberCard from './TeamMemberCard';
import Records from './Records';

import AOS from 'aos';
import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Set the animation duration (in ms)
      easing: 'ease-in-out', // Set the animation easing
    });
  }, []);
  return (
    <div className="mt-4 mb-5">
      <Container>
        <Row className="team-member-row">
          <div className="homeabout-heading">
            <h2 className="mb-4">
              <span style={{ color: '#0467a6' }}>About</span> Us
            </h2>
          </div>
          <Col xs={12} md={5}>
            <div
              className="teamframe"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <img src={refindia} alt="" />
            </div>
          </Col>
          <Col xs={12} md={7}>
            <p
              className="teamframe-text"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              Incorporated as a Sole Proprietorship (Individual) based firm,
              “Refindia Technologies” is instrumental as the manufacturer in
              this industry since 2018. The main headquarter of our company is
              situated in Namakkal, Tamil Nadu. The products we offer to our
              customers are Milk Condensing Machine, Curd Making Plant and many
              more. The array of our products is developed with the most
              favorable quality basic material and our experts ensure to obtain
              them from only trustworthy and certified merchants. Our precise
              selection of suitable material and technical processing techniques
              has made our range outstanding in terms of supremacy.
            </p>
          </Col>
        </Row>
        <Row className="team-member-row">
          <div className="homeabout-heading">
            <h2 className="mb-4">
              <span style={{ color: '#0467a6' }}>Our</span> Team
            </h2>
          </div>
          <Col
            className="team-member-card"
            xs={12}
            md={4}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <TeamMemberCard
              imglink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmrGaOWEs4y1lAGwRd7zxZ997gVWJKb56wTM4-pDI_g&s"
              name="Vinay Kumar"
              designation="CEO"
            />
          </Col>
          <Col
            className="team-member-card"
            xs={12}
            md={4}
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <TeamMemberCard
              imglink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmrGaOWEs4y1lAGwRd7zxZ997gVWJKb56wTM4-pDI_g&s"
              name="Arun Prakash"
              designation="Marketing Manager"
            />
          </Col>

          <Col
            className="team-member-card"
            xs={12}
            md={4}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <TeamMemberCard
              imglink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmrGaOWEs4y1lAGwRd7zxZ997gVWJKb56wTM4-pDI_g&s"
              name="Kavin"
              designation="Manager"
            />
          </Col>
        </Row>
        <Row className="team-member-row">
          <Col
            className="team-member-card"
            xs={12}
            md={4}
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <TeamMemberCard
              imglink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmrGaOWEs4y1lAGwRd7zxZ997gVWJKb56wTM4-pDI_g&s"
              name="Kathir"
              designation="Supervisor"
            />
          </Col>

          <Col
            className="team-member-card"
            xs={12}
            md={4}
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <TeamMemberCard
              imglink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmrGaOWEs4y1lAGwRd7zxZ997gVWJKb56wTM4-pDI_g&s"
              name="Kumaravel"
              designation="Consultant"
            />
          </Col>
          <Col
            className="team-member-card"
            xs={12}
            md={4}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <TeamMemberCard
              imglink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmrGaOWEs4y1lAGwRd7zxZ997gVWJKb56wTM4-pDI_g&s"
              name="Sidharth"
              designation="Operator"
            />
          </Col>
        </Row>
        <Row>
          <div className="homeabout-heading">
            <h2 className="mb-4">
              <span style={{ color: '#0467a6' }}>Our</span> Achievements
            </h2>
          </div>
          <Records />
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
