import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import axios from "axios";

export default function ProductDetails({cartItems, handleAddToCart}) {
   const location = useLocation();
   const navigate = useNavigate();
   const {title, price, images, description, category, id} = location.state;

   const [otherProducts, setOtherProducts] = useState([]);

   useEffect(() =>{
    async function getData(){
        const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=20&offset=0`)
        setOtherProducts(response.data);
    }
    getData();
   })

   return(
    <div style={{padding: 50}}>
        <Row>
            <Col lg={2}>
                <div>
                    {images.map((image, index) =>{
                        return(
                            <div key={index}>
                             <img src={image} width={120} style={{marginBottom: 20, borderRadius: 8, marginLeft: '2rem', marginTop: 24}} />
                            </div>
                        )
                    })}
                </div>
            </Col>
            <Col lg={5}>
                <div>
                    <img src={images[0]} width={400} style={{marginBottom: 10, borderRadius: 10, marginTop: 20}} />
                    <h4>{title}</h4>
                    <div style={{color: '#216ad9', fontSize: 30}}>$ {price}</div>
                    <div style={{width: 400}}>{description}</div>
                    <Button style={{marginTop: 20, width: 130}} onClick={() =>{
                         if(id in cartItems){
                            const currentItem = cartItems[id];
                            handleAddToCart({[id]: {title, price, quantity: currentItem.quantity + 1}})
                        }else{
                            handleAddToCart({[id]: {title, price, quantity: 1}})
                        }
                    }}>Add to cart</Button>
                </div>
            </Col>
            <Col lg={5}>
               <h2>Other products in same category</h2> 
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", marginLeft: "-9rem"}}>
                {otherProducts.map((product) =>{
                    if(product.id == id) return
                return(
                    <Card key={product.id} style={{width: '10rem', border: 'none', margin: 20}}>
                        <Card.Img src={product.images[0]} />
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>$ {product.price}</Card.Text>
                        <Button onClick={() => navigate(`/product/${product.id}`, {state: product})} style={{width: 110}}>View item</Button>
                    </Card>
                )
                })}
                </div>
            </Col>
        </Row>
    </div>
   )
}