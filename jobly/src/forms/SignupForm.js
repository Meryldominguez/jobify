import React, {useContext, useState} from 'react'

import { 
    Button,
    Form,
    Card,
    Col,
    Row,

 } from 'react-bootstrap'
import { useHistory } from 'react-router'
import AlertContext from '../context/AlertContext'
 
const SignupForm = ({signup}) => {
    const initialState = {
        username:"",
        firstName:"",
        lastName:"",
        email:"",
        password:""
    }
    const {alerts,setAlerts} = useContext(AlertContext)
    const [formData, setFormData] = useState(initialState);
    const history = useHistory()

    const handleSubmit = async (evt)=> {
        evt.preventDefault();
        try {
            await signup(formData)
            setAlerts([...alerts,{variant:"success",msg:"You have successfully signed up!"}])
            history.push("/")
        } catch (error) {
            setFormData({
                username:"",
                password:""
            })
            setAlerts([...alerts,...error.map(e=>{return {variant:"danger",msg:e}})] )
        }
        await signup(formData)
      };

    const handleChange = evt => {
        const {name,value} = evt.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };
  return (
    
    <Col xs={8} className="m-auto">
    <Card className="p-3 my-5">
        <h4>Sign up for Jobify!</h4>
    <Form onSubmit={handleSubmit} className="my-4">
        <Form.Group controlId="formBasicEmail">
            <Form.Control 
                required
                type="email" 
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            <Form.Text className="text-muted text-left">
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
            <Form.Text className="text-muted text-left">
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
            <Form.Text className="text-muted text-left">
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
            <Form.Text className="text-muted text-left">
            We need your name so you can apply to jobs!.
            </Form.Text>
        </Form.Group>
        <Row>
            <Col xs={9}>
                <Button variant="primary" block type="submit" >
                    Signup
                </Button>
            </Col>
            <Col xs={3}>
                <Button variant="danger" block onClick={()=>setFormData(initialState)}>
                    Reset
                </Button>
            </Col>
        </Row>
    </Form>
    </Card>
    </Col>
  )
}
 
export default SignupForm