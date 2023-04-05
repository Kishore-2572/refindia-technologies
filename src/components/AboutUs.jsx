import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import refindia from '../assets/images/refindia.png'
import '../css/about.css'
import TeamMemberCard from './TeamMemberCard';
import Records from './Records';
const AboutUs = () => {
  return (
    <div className='mt-4 mb-5'>
    <Container>
      <Row className='team-member-row'>
      <div className='homeabout-heading'>
        <h2 className='mb-4'><span style={{color:'#0467a6'}}>About</span> Us</h2>
        </div>
        <Col xs={12} md={5}>
            <div className="teamframe">
            <img src={refindia} alt=""/>
            </div>
        </Col>
        <Col xs={12} md={7}>
          <p className='teamframe-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure in, deleniti architecto fugiat nam placeat eius ipsa molestias saepe eum dolore, veritatis veniam similique accusantium suscipit exercitationem, inventore officia id?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint consequuntur qui ut itaque atque explicabo delectus, suscipit dolores repellat beatae hic nam id, officiis nostrum, aliquam consequatur laboriosam quas unde.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus placeat animi nulla itaque exercitationem aperiam reprehenderit pariatur dolore atque? A minima ut consequatur animi distinctio repellat ratione qui ab.
          </p>
        </Col>
      </Row>
      <Row className='team-member-row'>
        <div className='homeabout-heading'>
        <h2 className='mb-4'><span style={{color:'#0467a6'}}>Our</span> Team</h2>
        </div>
        <Col className='team-member-card' xs={12} md={4}>
          <TeamMemberCard/>
        </Col>
        <Col className='team-member-card' xs={12} md={4}>
          <TeamMemberCard/>
        </Col>
        <Col className='team-member-card' xs={12} md={4}>
          <TeamMemberCard/>
        </Col>
      </Row>
      <Row className='team-member-row'>
      <Col className='team-member-card' xs={12} md={4}>
          <TeamMemberCard/>
        </Col>
        <Col className='team-member-card' xs={12} md={4}>
          <TeamMemberCard/>
        </Col>
        <Col className='team-member-card' xs={12} md={4}>
          <TeamMemberCard/>
        </Col>
      </Row>
      <Row>
      <div className='homeabout-heading'>
        <h2 className='mb-4'><span style={{color:'#0467a6'}}>Our</span> Achievements</h2>
        </div>
        <Records/>
      </Row>
    </Container>
    </div>
  )
}

export default AboutUs