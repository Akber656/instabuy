import React from "react";
import SuccessImg from '../assets/right.png';
import { Card } from "react-bootstrap";

export default function Checkout() {
    return(
        <Card style={{width: '70vh',  marginLeft: '35rem', marginTop: '3rem'}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: 70}}>
            <img src= {SuccessImg} height={300} width={300} style={{marginBottom: 20}}/>
            <h2>Thank You</h2>
            <h2 style={{marginBottom: '1rem'}}>Your Order is Confirmed</h2>
            <h5 style={{width: '100vh', marginLeft: '19rem'}}>We will be sendind you an email confirmation shortly!</h5>
        </div>
        </Card>
    )
}