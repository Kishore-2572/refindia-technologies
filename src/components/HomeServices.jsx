import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import AOS from 'aos';
import { useEffect } from 'react';

const HomeAbout=()=>{
    useEffect(() => {
        AOS.init({
          duration: 2000, // Set the animation duration (in ms)
          easing: 'ease-in-out', // Set the animation easing
        });
      }, []);
      
    return(
      <div className='mt-5'>
        <br/>
        <Container>
              <h2 className='mt-5'><span style={{color:'blue'}}>OUR </span>PRODUCTS</h2><br/>
              <Row>
              <Col xs={12} md={6}>
         
          <p data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000"> “Refindia Technologies” is instrumental as the manufacturer in this industry since 2018. The main headquarter of our company is situated in Namakkal, Tamil Nadu. The products we offer to our customers are Milk Condensing Machine, Curd Making Plant and many more.<p><br/> The array of our products is developed with the most favorable quality basic material and our experts ensure to obtain them from only trustworthy and certified merchants. Our precise selection of suitable material and technical processing techniques has made our range outstanding in terms of supremacy.</p></p>
                </Col>

                <Col xs={12} md={6}>
                    <div className='mb-5'>
                    <div data-aos="fade-out" data-aos-delay="500" data-aos-duration="2000">
          <Image src="https://img.freepik.com/free-vector/factory-workers-robotic-arm-removing-packages-from-conveyor-line-engineer-using-computer-operating-process-vector-illustration-business-production-machine-technology-concepts_74855-9859.jpg?w=900&t=st=1679826013~exp=1679826613~hmac=127e2aa0cedccace7d74718110d149cbef270c427c8821549a65452c942af6eb" alt="about us" fluid />
      </div>
      </div>
       </Col>
              </Row>
        </Container>
        </div>
    )
}

export default HomeAbout;