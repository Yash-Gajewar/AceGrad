import React from 'react'
import './ExperienceCard.css'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


const ExperienceCard = () => {
  return (
      <Card className="ExperienceCardBody">
        <Card.Body>
          <Card.Title className='font-semibold mb-4 mt-2 flex justify-between'> <span> Zscaler Interview Experience | On-Campus 2021 </span> <span className=' font-normal text-xs text-gray-600'>Last Updated: 16 November 2021</span>  </Card.Title>
          <Card.Text className='mb-4'>
            Hi all, Zscaler visited our campus in the month of October 2021, the process took only 4-5 days to complete. Two profiles were offered Assoc <Card.Link className="font-semibold" href="#">... read more</Card.Link>
          </Card.Text>

          <div className="tags d-inline-flex align-items-center">
            <span className="tag-icon mr-2" style={{ color: '#AAAAFF' }}> <i class="fa-solid fa-tag fa-lg"></i> </span>
            <Badge className="ExperienceCardTag mr-2">Interview</Badge>
            <Badge className="ExperienceCardTag mr-2">Zscaler</Badge>
            <Badge className="ExperienceCardTag mr-2">On-Campus</Badge>
            <Badge className="ExperienceCardTag">2021</Badge>
          </div>

        </Card.Body>
      </Card>
  )
}

export default ExperienceCard