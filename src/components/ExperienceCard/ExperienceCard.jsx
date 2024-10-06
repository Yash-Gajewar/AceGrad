import './ExperienceCard.css'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


const ExperienceCard = ({experience}) => {
  return (
      <Card className="ExperienceCardBody">
        <Card.Body>
          <Card.Title className='font-semibold mb-4 mt-2 flex justify-between'> <span> {experience.company_name} Interview Experience | {experience.interview_source} </span> <span className=' font-normal text-xs text-gray-600'>Last Updated: {experience.date}</span>  </Card.Title>
          <Card.Text className='mb-4'>
            {experience.description}
          </Card.Text>

          <div className="tags d-inline-flex align-items-center">
            <span className="tag-icon mr-2" style={{ color: '#AAAAFF' }}> <i class="fa-solid fa-tag fa-lg"></i> </span>
            <Badge className="ExperienceCardTag mr-2">Interview</Badge>
            <Badge className="ExperienceCardTag mr-2">{experience.company_name}</Badge>
            <Badge className="ExperienceCardTag mr-2">{experience.interview_source}</Badge>
            <Badge className="ExperienceCardTag">{experience.date.slice(-4)}</Badge>
          </div>

        </Card.Body>
      </Card>
  )
}

export default ExperienceCard