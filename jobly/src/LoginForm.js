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
import { useHistory } from 'react-router';
 
const LoginForm = ({login}) => {
    const history = useHistory()
    const [formData, setFormData] = useState(
        {
            username:"",
            password:""
        });

    const handleSubmit = async (evt)=> {
        evt.preventDefault();
        login(formData)
        //history.push("/profile")
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
        <Form.Group controlId="formBasicUsername">
            <Form.Control 
                type="text" 
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Control 
                type="password" 
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
            Login
        </Button>
    </Form>
  )
}
 
export default LoginForm