import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/about.css';
const TeamMemberCard = ({ imglink, name, designation }) => {
  return (
    <Card className="team-member-card" style={{ width: '18rem' }}>
      <div className='tc-img'>
        <Card.Img height="300px"  variant="top" src={imglink} />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{designation}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TeamMemberCard;
