import React from 'react';
import './ExperienceCard.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const ExperienceCard = ({ title, text, tags, date, onClick }) => {
  return (
    <Card className="ExperienceCardBody" onClick={onClick} style={{ cursor: 'pointer' }}>
      <Card.Body>
        
        <Card.Title className='font-semibold mb-4 mt-2 flex justify-between'>
          <span>{title}</span>
          <span className='font-normal text-xs text-gray-600'>Last Updated: {date}</span>
        </Card.Title>
        
        <Card.Text className='mb-4'>
          {text} <Card.Link className="font-semibold" href="#"></Card.Link>
        </Card.Text>

        <div className="tags d-inline-flex align-items-center">
          <span className="tag-icon mr-2" style={{ color: '#AAAAFF' }}> <i className="fa-solid fa-tag fa-lg"></i> </span>
          
          {tags.map((tag, index) => (
            <Badge key={index} className="ExperienceCardTag mr-2">{tag}</Badge>
          ))}

        </div>

      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
