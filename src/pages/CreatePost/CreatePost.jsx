import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import './CreatePost.css'; // Import CSS file for styles

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

    const handleAddPost = () => {
        // Logic to handle post submission goes here
        console.log('Post Added:', { title, experience, tags });
        // Clear the fields after submission
        setTitle('');
        setExperience('');
        setTags([]);
        setPreview('');
    };

    return (
        <div className='flex'>
            <SidebarComponent />
            <div className="container mt-4">
            <h1 className="mt-2 mb-6 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
    Post Interview Experience
</h1>
                <Row className="content-row">
                    <Col md={6} className="form-section">
                        <h2>Create Post</h2>
                        <Form>
                            <Form.Group controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter title" 
                                    value={title} 
                                    onChange={handleTitleChange}
                                    style={{ marginTop: '0.5rem' }} 
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="experience">
                                <Form.Label>Experience</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={5} 
                                    placeholder="Enter experience" 
                                    value={experience} 
                                    onChange={handleExperienceChange} 
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="tags">
                                <Form.Label>Tags</Form.Label>
                                <InputGroup>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter tags" 
                                        onKeyUp={handleTagsChange} 
                                    />
                                    <InputGroup.Text>Press Enter to add</InputGroup.Text>
                                </InputGroup>
                                <div>
                                    {tags.map((tag, index) => (
                                        <span key={index} className="badge bg-secondary me-1">{tag} <span onClick={() => removeTag(tag)}>x</span></span>
                                    ))}
                                </div>
                            </Form.Group>
                            <br />
                            <Button variant="primary" onClick={handleAddPost}>
                                Add Post
                            </Button>
                        </Form>
                    </Col>
                    {/* <Col md={6} className="preview-section">
                        <h2>Preview</h2>
                        <Card>
                            <Card.Body dangerouslySetInnerHTML={{ __html: preview }} />
                        </Card>
                    </Col> */}
                </Row>
            </div>
        </div>
    );
}

export default CreatePost;
