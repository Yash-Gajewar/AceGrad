import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [experience, setExperience] = useState('');
    const [tags, setTags] = useState([]);
    const [preview, setPreview] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
        // Update preview with text formatting
        setPreview(event.target.value.replace(/#(.*?)#/g, "<strong>$1</strong>").replace(/~(.*?)~/g, "<em>$1</em>"));
    };

    const handleTagsChange = (event) => {
        const newTag = event.target.value.trim();
        if (event.key === 'Enter' && newTag !== '') {
            setTags([...tags, newTag]);
            event.target.value = ''; // Clear input field after adding tag
        }
    };

    const removeTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };


    return (
        <div className='flex'>


            {/* side bar div */}
            <SidebarComponent />
            {/* main content div */}


            <div className="container mt-4">
                <Row>
                    <Col md={8}>
                        <h1>Create Interview Experience</h1>
                        <Form>
                            <Form.Group controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" value={title} onChange={handleTitleChange} />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="experience">
                                <Form.Label>Experience</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Enter experience" value={experience} onChange={handleExperienceChange} />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="tags">
                                <Form.Label>Tags</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" placeholder="Enter tags" onKeyUp={handleTagsChange} />
                                    <InputGroup.Text>Press Enter to add</InputGroup.Text>
                                </InputGroup>
                                <div>
                                    {tags.map((tag, index) => (
                                        <span key={index} className="badge bg-secondary me-1">{tag} <span onClick={() => removeTag(tag)}>x</span></span>
                                    ))}
                                </div>
                            </Form.Group>
                            <br />
                        </Form>
                    </Col>
                    <Col md={4}>
                        <h3>Preview</h3>
                        <Card>
                            <Card.Body dangerouslySetInnerHTML={{ __html: preview }} />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default CreatePost;
