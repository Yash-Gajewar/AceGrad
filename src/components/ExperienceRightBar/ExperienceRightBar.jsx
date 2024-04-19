import React from 'react'
import './ExperienceRightBar.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ExperienceRightBar = () => {
  return (
    <Card className='rightbar'>
      <Card.Header className='font-semibold mb-4 mt-2 text-xl'>Similar Topics</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className='flex justify-between mb-2'>
          <span>Experiences</span>
          <span className='text-sm text-gray-500'>12.9k+ articles</span>
        </ListGroup.Item>
        <ListGroup.Item className='flex justify-between mb-2'>
          <span>Interview Experiences</span>
          <span className='text-sm text-gray-500'>11.6k+ articles</span>
        </ListGroup.Item>
        <ListGroup.Item className='flex justify-between mb-2'>
          <span>Marketing</span>
          <span className='text-sm text-gray-500'>2k+ articles</span>
        </ListGroup.Item>
        <ListGroup.Item className='flex justify-between mb-2'>
          <span>Amazon</span>
          <span className='text-sm text-gray-500'>1.7k+ articles</span>
        </ListGroup.Item>
        <ListGroup.Item className='flex justify-between mb-2'>
          <span>Internship</span>
          <span className='text-sm text-gray-500'>1.5k+ articles</span>
        </ListGroup.Item>
        <ListGroup.Item className='flex justify-between mb-2'>
          <span>Placements</span>
          <span className='text-sm text-gray-500'>350+ articles</span>
        </ListGroup.Item>
        <ListGroup.Item className='flex justify-between mb-2'>
          <span>Samsung</span>
          <span className='text-sm text-gray-500'>290+ articles</span>
        </ListGroup.Item>
        <ListGroup.Item className='flex justify-between mb-2'>
          <span>Oracle</span>
          <span className='text-sm text-gray-500'>280+ articles</span>
        </ListGroup.Item>
        <ListGroup.Item className='flex justify-between mb-2'>
          <span>Accenture</span>
          <span className='text-sm text-gray-500'>130+ articles</span>
        </ListGroup.Item>
        <ListGroup.Item className='flex justify-between mb-2'>
          <span>Deutsche Bank</span>
          <span className='text-sm text-gray-500'>79 articles</span>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default ExperienceRightBar