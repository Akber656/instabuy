import { Row , Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignupImg from '../assets/signup.png';


export default function Signup({setUser}) {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
    return(
        <div style={{backgroundColor: '#216ad9'}}>
            <Row style={{width: 'fit-content'}}>
              <Col style={{marginLeft: '10rem', marginTop: '10rem'}}>
                <div >
                  <h1 style={{color: 'white'}}>InstaBuy!</h1>
                  <p style={{color: 'white', fontSize: 25}}>One place where brands come <br />together from all across the world.</p>
                  <Form>
                      <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <Form.Group style={{width: '49%'}} className="mb-3" controlId="formGroupEmail">
                          <Form.Control type="email" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group style={{width: '49%'}} className="mb-3" controlId="formGroupPassword">
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </div>

                        <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicText">
                          <Form.Control type="text" placeholder="Enter Full name" />
                        </Form.Group>

                    <Button onClick={() =>{
                      localStorage.setItem('userEmail', email);
                      setUser(email);
                      navigate('/');
                    }}
                    style={{width: '100%', marginBottom: 20, backgroundColor: '#216ad9', borderWidth: 1, borderColor: 'white'}} type="submit">
                      Join the club
                    </Button>
                    <div style={{color:'white'}}>
                      Already a member? <a style={{color: 'white', cursor: "pointer"}} onClick={() => navigate('/login')}>Click here</a>
                    </div>
                    </Form>
                </div>
              </Col>
                <Col><img src={SignupImg} style={{height: '91.5vh', marginLeft: '20rem'}}/></Col>
            </Row>
            
        </div>
    )
}