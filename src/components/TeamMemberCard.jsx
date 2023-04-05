import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/about.css'
const TeamMemberCard = () => {
  return (
    <Card className='team-member-card' style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmrGaOWEs4y1lAGwRd7zxZ997gVWJKb56wTM4-pDI_g&s" />
    <Card.Body>
      <Card.Title>Name of empolyee</Card.Title>
      <Card.Text>Desigination</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default TeamMemberCard;