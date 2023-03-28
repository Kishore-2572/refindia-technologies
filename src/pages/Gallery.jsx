import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import test from '../assets/images/testing.jpg'
import '../css/gallery.css'
function Gallery() {
  return(
    <Container className='gallery-container'>
      {/* <fieldset>Our wonderful memories with Cilents</fieldset> */}
      <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col>
          <Card className='gallery-card'>
            <Card.Img variant="top" src={test} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    
  )
}

export default Gallery