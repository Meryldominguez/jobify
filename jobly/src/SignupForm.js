import React, {useState} from 'react'

import { 
    Button,
    Form,
    FormGroup,
    FormControl,
    InputGroup,
    Col,
    Row,

 } from 'react-bootstrap'
 
const SignupForm = ({signup}) => {
    const [formData, setFormData] = useState(
        {
            username:"",
            firstName:"",
            lastName:"",
            email:"",
            password:""
        });

    const handleSubmit = async (evt)=> {
        evt.preventDefault();
        signup(formData)
      };

    const handleChange = evt => {
        const {name,value} = evt.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Control 
                required
                type="email" 
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicUsername">
            <Form.Control 
                required
                type="text" 
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
            <Form.Text className="text-muted">
            You will log in with this.
            </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Control 
                required
                type="password" 
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <Form.Text className="text-muted">
            You should choose a good password.
            </Form.Text>
        </Form.Group>
        <Form.Group >
            <Row>
                <Col>
                    <Form.Control 
                        required
                        type="text" 
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </Col>
                <Col>
                    <Form.Control 
                        required
                        type="text" 
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                     />
                </Col>
            </Row>
            <Form.Text className="text-muted">
            We need your name so you can apply to jobs!.
            </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
            Signup
        </Button>
    </Form>
  )
}
 
export default SignupForm