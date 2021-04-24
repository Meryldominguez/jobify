import React, {useState} from 'react'

import { 
    Button,
    Form,
    FormGroup,
    FormControl,
    InputGroup,
    Col,

 } from 'react-bootstrap'
 
const SignupForm = () => {
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
        <Col>
        
        </Col>
    </Form>
  )
}
 
export default SignupForm