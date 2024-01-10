import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";

import CartImg from '../assets/basket.png';
import { useNavigate } from "react-router-dom";

export default function Cart({cartItems}) {
    console.log(cartItems)
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const navigate = useNavigate();

    useEffect(() =>{
        let tempPrice = 0;
        let tempQuantity = 0;
        Object.keys(cartItems).map((cartItemId) => {
            const details = cartItems[cartItemId];
            tempQuantity += details.quantity;
            tempPrice += details.quantity * details.price;
        });
        setTotalQuantity(tempQuantity);
        setTotalPrice(tempPrice);
    }, [])

    return(
        <div style={{margin: 60}}>
            <Row>
              <Col style={{margin: 60}}>
                <h2>Your Cart:</h2>
                <Table striped bordered hover style={{height: '20vh', fontSize: '1.4rem'}}>
                 <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                 </thead>
                 <tbody>
                    {Object.keys(cartItems).map((cartItemId) => {
                        const itemsDetails = cartItems[cartItemId];
                        return(
                            <tr key={cartItemId}>
                                <td>{itemsDetails.title}</td>
                                <td>{itemsDetails.quantity}</td>
                                <td>{itemsDetails.quantity * itemsDetails.price}</td>
                            </tr>
                        )
                    })}
                    <tr style={{fontWeight: "bolder"}}>
                        <td>Total</td>
                        <td>{totalQuantity}</td>
                        <td >{totalPrice}</td>
                    </tr>
                 </tbody>
                </Table>
                <Button onClick={() => navigate('/checkout')}>Checkout </Button>
              </Col>
              <Col>
                <img src={CartImg} height={600} style={{marginLeft: '3rem'}}/>
              </Col>
            </Row>
        </div>
       
    )
}