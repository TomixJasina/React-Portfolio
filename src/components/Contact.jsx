import React from 'react';
import Resume from '../assets/resume/Resume.pdf'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Contact(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, subject, message });
    }

    return (
        <Container className='text-white'>
        <Row className='m-5'>
        <Col md={6}>
                <h1>Contact me</h1>
            <div className="my-5">
              <Button href={Resume} download="My_Resume.pdf" variant="dark" size='lg'>Download My CV</Button>
            </div>
            <div className="my-5">
              <Button href="https://github.com/TomixJasina" variant="dark" size='lg'>GitHub</Button>
            </div>
            <div className="my-5">
              <Button href="https://www.linkedin.com/in/tomasz-jasinski-906ab62a1/"  variant="dark" size='lg'>LinkedIn</Button>
            </div>
            <div className="my-5">
              <Button href="mailto:thomas.jasinski90@gmail.com" variant="dark" size='lg'>My Email</Button>
            </div>

        </Col>
      
        <Col md={6}>
                        <Card className='bg-dark text-white'>
                        <Card.Body>
                            <Card.Title>Send a Message</Card.Title>
                            <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </Form.Group>
                        <Button variant="outline-danger" type="submit">
                            Send Message
                        </Button>
                        </Form>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container>
    )
}

export default Contact;