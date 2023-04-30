import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import '../css/services.css';

const Services = () => {
  return (
    <div className="services mb-3">
      <Container>
        <h2 className="text-center mt-5">
          Our <span style={{ color: '#0467a6' }}>Services</span>
        </h2>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <div className="services-card-div">
                <Card.Img
                  className="services-img"
                  variant="top"
                  src="https://img.freepik.com/free-vector/business-share-market-growth-green-arrow-background_1017-37130.jpg?w=740&t=st=1682065037~exp=1682065637~hmac=a1c2681cee2baac05f4aaa776e40dcd39ab19b8d9b99389290c7e9af547f1025"
                />
              </div>
              <Card.Body>
                <Card.Title>Dairy Products Marketing</Card.Title>

                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <div className="services-card-div">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/tiny-people-making-huge-sweet-cocktail-flat-vector-illustration-male-female-cartoon-characters-cooking-dessert-men-women-holding-big-biscuits-chocolate-bar-bakery-factory-pastry-concept_74855-22572.jpg?t=st=1682066110~exp=1682066710~hmac=51f0da9a692e7fb1731860abe8478fa13ec4d0eb89a046566e81225426c67f3b"
                />
              </div>
              <Card.Body>
                <Card.Title>Icecream Plant Erection</Card.Title>

                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <div className="services-card-div">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/online-certification_23-2148568874.jpg?w=740&t=st=1682401304~exp=1682401904~hmac=8049e0addf9805d5b8239f92d5764f924a823038162a509a2f04609eeb644f86"
                />{' '}
              </div>

              <Card.Body>
                <Card.Title>Liscense</Card.Title>

                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <div className="services-card-div">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/happy-female-farmer-working-with-smart-farm-flat-illustration_74855-14050.jpg?w=740&t=st=1682399942~exp=1682400542~hmac=9bf9a1091100ba8619ef9c7ce9b614736e0f19fe8eabb63bfaadad6ab673c9f3"
                />
              </div>
              <Card.Body>
                <Card.Title>Livestock Farm Advices</Card.Title>
                <span class="material-symbols-outlined">design_services</span>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <div className="services-card-div">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/marketing-concept-with-smartphone_52683-74144.jpg?w=740&t=st=1682400081~exp=1682400681~hmac=c94d22756049956c2e57f3dd3d53d74d59876134ec1c4eb632a9561119877fc6"
                />
              </div>
              <Card.Body>
                <Card.Title>Milk Marketing</Card.Title>
                <span class="material-symbols-outlined">design_services</span>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <div className="services-card-div">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/dairy-factory-flat-composition-with-indoor-scenery-with-storage-cans-conveyor-line-with-bottles-people_1284-62320.jpg?w=740&t=st=1682401585~exp=1682402185~hmac=a509167f8871a4972bcc56b971763193fcf54f4a51f7e123b3d46e6456926943"
                />
              </div>
              <Card.Body>
                <Card.Title>
                  New Dairy By-Products Plant Erection & Commissioning
                </Card.Title>
                <span class="material-symbols-outlined">design_services</span>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <div className="services-card-div">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/business-team-with-laptops-look-digital-presentation-with-charts-digital-presentation-office-online-meeting-visual-data-representation-concept-bright-vibrant-violet-isolated-illustration_335657-579.jpg?w=740&t=st=1682400737~exp=1682401337~hmac=5e4e4480f99f05d2c87112a92b8865727e41bffdcfbd0ec21a7e787c4b13b8ae"
                />
              </div>
              <Card.Body>
                <Card.Title>Technical Advices and Training</Card.Title>
                <span class="material-symbols-outlined">design_services</span>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <div className="services-card-div">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/man-choosing-drill-carpentry-locksmith-work-tools-construction-shop-salesman-offering-best-electric-instrument_575670-428.jpg?w=740&t=st=1682401002~exp=1682401602~hmac=4886c8f1542ffab0acad7f21191397b3ed5364d1a87d6f6638ca38c896fc0cfd"
                />
              </div>
              <Card.Body>
                <Card.Title>Used Machinery Buying and Selling</Card.Title>
                <span class="material-symbols-outlined">design_services</span>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <div className="services-card-div">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/dairy-plant-set-flat-isolated-compositions-with-factory-facilities-milking-apparatus-cows-people-delivery-vector-illustration_1284-75482.jpg?w=900&t=st=1682400966~exp=1682401566~hmac=7b6c314b2df1f423b3e71cf4b539c1c6a4e6cfa96cd7c30c90b48696d203deaf"
                />
              </div>
              <Card.Body>
                <Card.Title>
                  New Dairy Plant Erection & Commissioning
                </Card.Title>
                <span class="material-symbols-outlined">design_services</span>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
