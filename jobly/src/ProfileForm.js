import React, {useEffect, useState} from 'react'

import { 
    Button,
    Form,
    Card,
    Col,
    Row,
    Spinner
 } from 'react-bootstrap'
import { useGetUserProfile } from './hooks/useFetch'
 
const ProfileForm = ({user,username}) => {

    let [[profile, setProfile], isLoading, authProfile, updateProfile] = useGetUserProfile(username)
    
    const [formData, setFormData] = useState(profile);

    useEffect(()=>{
        let email, firstName, lastName
        if (profile) {
            email = profile.email
            firstName = profile.firstName
            lastName = profile.lastName} 
        setFormData({email, firstName, lastName, password:""})
    },[profile])


    const handleSubmit = async (evt)=> {
        evt.preventDefault();
        if (await authProfile(formData.password)) updateProfile(formData)
        setFormData({...formData,password:""})
    };

    const handleChange = evt => {
        const {name,value} = evt.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };
    const resetForm = ()=>{
        const {email, firstName, lastName } = profile
        setFormData({
            email,
            firstName,
            lastName,
            password:"",
        })
        setProfile({...profile})
    }
    return(
        <>
    {!isLoading && profile?
    <Col xs={8} className="m-auto">
    <Card className="p-3 my-5">
        <h4>{profile.username}'s profile</h4>
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
        </Form.Group>
        <Form.Group controlId="formBasicUsername">
            <Form.Control 
                disabled
                type="text" 
                placeholder={username}
                name="username"
                />
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
            Confirm any changes with your password.
            </Form.Text>
        </Form.Group>
        <Row>
            <Col xs={9}>
                <Button variant="primary" block type="submit" >
                    Signup
                </Button>
            </Col>
            <Col xs={3}>
                <Button 
                    variant="danger" 
                    block 
                    onClick={resetForm}
                    >
                    Reset
                </Button>
            </Col>
        </Row>
    </Form>
    </Card>
    </Col>
    :
    <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner>}
    </>
    )
}
 
export default ProfileForm