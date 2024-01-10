import { useState } from "react";
import { Row , Col, Form, Button } from "react-bootstrap";

import LoginImg from '../assets/login.png';
import { useNavigate } from "react-router-dom";

export default function Login({setUser}) {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

    return(
        <div style={{backgroundColor: '#216ad9'}}>
            <Row style={{width: '210vh'}}>
              <Col style={{margin: 150}}>
               <div>
                 <h1 style={{color: 'white'}}>InstaBuy!</h1>
                 <p style={{color: 'white', fontSize: 25}}>One place where brands come <br />together from all across the world.</p>
                 <Form>
                    <div style={{width: '70%', display: "flex", justifyContent: "space-between"}}>
                      <Form.Group style={{width: '49%'}} className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group style={{width: '49%'}} className="mb-3" controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                   </div>

                   <Button onClick={() =>{
                    localStorage.setItem('userEmail', email);
                    setUser(email);
                    navigate('/');

                   }} style={{width: '70%', marginBottom: 20, backgroundColor: '#216ad9', borderWidth: 1, borderColor: 'white'}} type="submit">Start Shopping</Button>
                   <div style={{color:'white'}}>
                    Join the club, <a style={{color:'white', cursor: "pointer"}} onClick={() => navigate('/signup')}>Click here</a>
                   </div>
                  </Form>
                </div>
                </Col>
                <Col><img src={LoginImg} style={{height: '91.5vh', marginLeft: '-5rem'}}/></Col>
            </Row>
            
        </div>
    )
}