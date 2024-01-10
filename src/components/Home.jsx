import { Button, Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import CarouselOneImg from "../assets/1.png"; 
import CarouselTwoImg from "../assets/2.png"; 
import CarouselThreeImg from "../assets/3.png"; 

import CompanyOneImg from '../assets/company1.png';
import CompanyTwoImg from '../assets/company2.png';
import CompanyThreeImg from '../assets/company3.png';
import CompanyFourImg from '../assets/company4.png';
import CompanyFiveImg from '../assets/company5.png';
import CompanySixImg from '../assets/company6.png';
import { useNavigate } from 'react-router-dom';

export default function Home(user) {
  const navigate = useNavigate();

  const handleCTAClick = () => {
     if(user) {
      navigate('/products')
     }else{
      navigate('/login')
     }
  }

   return(
    <div className='home-container'>
        <Carousel >
          <Carousel.Item>
            <Row>
                <Col style={{marginLeft: '7rem', marginTop: '3rem'}}> 
                  <div style={{padding: 100}}> 
                    <h1 style={{fontWeight: 700}}><i>SHOP WITH UTMOST</i></h1>
                    <h1 style={{color: '#216ad9', fontWeight: 700}}><i>STYLE</i></h1>
                    <h4 style={{marginBottom: 15, width: 350}}>Shop with latest trendy clothes to the best gadgets. With Star Shopper you save 10% every time you shop!</h4>
                    <div style={{marginBottom: 15}}>
                        <Button style={{width: 300}} onClick={handleCTAClick} >Browse Products</Button>
                    </div>
                    <div>
                        <h4>Products are available from:</h4>
                        <img src={CompanyOneImg} style={{height: 50}} />
                        <img src={CompanyTwoImg} style={{height: 50}} />
                        <img src={CompanyThreeImg} style={{height: 50}} />
                        <img src={CompanyFourImg} style={{height: 50}} />
                        <img src={CompanyFiveImg} style={{height: 50}} />
                        <img src={CompanySixImg} style={{height: 50}} />
                    </div>
                  </div>
                </Col>
                <Col>
                  <img src={CarouselOneImg} style={{height: '85vh', marginTop: 15 }}/>
                </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
                <Col style={{marginLeft: '7rem', marginTop: '3rem'}}>
                  <div style={{padding: 100}}> 
                    <h1 style={{fontWeight: 700}}><i>SHOP WITH UTMOST</i></h1>
                    <h1 style={{color: '#216ad9'}}><i>STYLE</i></h1>
                    <h4 style={{marginBottom: 15, width: 350}}>Shop with latest trendy clothes to the best gadgets. With Star Shopper you save 10% every time you shop!</h4>
                    <div style={{marginBottom: 15}}>
                        <Button style={{width: 300}} onClick={handleCTAClick} >Browse Products</Button>
                    </div>
                    <div>
                        <h4>Products are available from:</h4>
                        <img src={CompanyOneImg} style={{height: 50}} />
                        <img src={CompanyTwoImg} style={{height: 50}} />
                        <img src={CompanyThreeImg} style={{height: 50}} />
                        <img src={CompanyFourImg} style={{height: 50}} />
                        <img src={CompanyFiveImg} style={{height: 50}} />
                        <img src={CompanySixImg} style={{height: 50}} />
                    </div>
                  </div>
                </Col>
                <Col>
                <img src={CarouselTwoImg} style={{height: '80vh', marginTop: '3rem'}}/>
                </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
                <Col style={{marginLeft: '7rem', marginTop: '3rem'}}>
                  <div style={{padding: 100}}> 
                    <h1 style={{fontWeight: 700}}><i>SHOP WITH UTMOST</i></h1>
                    <h1 style={{color: '#216ad9', fontWeight: 700}}><i>STYLE</i></h1>
                    <h4 style={{marginBottom: 15, width: 350}}>Shop with latest trendy clothes to the best gadgets. With Star Shopper you save 10% every time you shop!</h4>
                    <div style={{marginBottom: 15}}>
                        <Button style={{width: 300}} onClick={handleCTAClick} >Discounts!</Button>
                    </div>
                    <div>
                        <h4>Products are available from:</h4>
                        <img src={CompanyOneImg} style={{height: 50}} />
                        <img src={CompanyTwoImg} style={{height: 50}} />
                        <img src={CompanyThreeImg} style={{height: 50}} />
                        <img src={CompanyFourImg} style={{height: 50}} />
                        <img src={CompanyFiveImg} style={{height: 50}} />
                        <img src={CompanySixImg} style={{height: 50}} />
                    </div>
                  </div>
                </Col>
                <Col>
                <img src={CarouselThreeImg} style={{height: '80vh', marginTop:'4rem'}}/>
                </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
    </div>
   )
}