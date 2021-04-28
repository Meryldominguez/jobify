import React, {useState} from 'react'
import {v4 as uuid} from "uuid"
import { 
    Button,
    Form,
    Card,
    Col,
    Alert
} from 'react-bootstrap'
import { useHistory } from 'react-router';
import AlertContainer from '../components/AlertContainer';
 
const LoginForm = ({login}) => {
    const history = useHistory()
    const [alerts, setAlerts] = useState([])
    
    const [formData, setFormData] = useState(
        {
            username:"",
            password:""
        });

    const handleSubmit = async (evt)=> {
        evt.preventDefault();
        setAlerts([])
        try {
            await login(formData)
            history.push("/")
        } catch (error) {
            console.log(error)
            setFormData({
                username:"",
                password:""
            })
            let alertArr=[]
            error.map(e=>alertArr.push({key:uuid(),msg:e})) 
            setAlerts(alertArr)
    
        }
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
        <h4>Login to your Jobify account:</h4>
    <Form onSubmit={handleSubmit} className="my-3">
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
        <AlertContainer alerts={[...alerts]} />
    </Card>
    </Col>
  )
}
 
export default LoginForm