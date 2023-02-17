import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGauge, faClipboard, faUser, faBookOpenReader, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import girl1 from '../Image/girl-1.jpg';
import girl2 from '../Image/girl-2.jpg';
import boy1 from '../Image/boy-1.jpg';
import boy2 from '../Image/boy-2.jpg';

import './Home.css';

const Home = () => {
    
    return (
<div className=''>      
   <Row>
        <Col lg={3} md={3} sm={2}>
            <div className='dasboard'>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/dasboard" className='nav-list'>
                        <FontAwesomeIcon icon={faGauge}  className='nav-icon mx-3' /> 
                       Dasboard
                    </Nav.Link>
                        <Accordion className='accordion' flush>
                            <Accordion.Item eventKey="1" className='bg-dark'>
                                <Accordion.Header className='bg-dark'>
                                    <FontAwesomeIcon icon={faClipboard} className='nav-icon mx-3'/>
                                    Catagories list
                                </Accordion.Header>
                                <Accordion.Body className='dropdown'>
                                    <Nav.Link href="/premium" className='nav-list'>Premium</Nav.Link>
                                    <Nav.Link href="/golden" className='nav-list'>Golden</Nav.Link>
                                    <Nav.Link href="/silver" className='nav-list'>Silver</Nav.Link>
                                    <Nav.Link href="/brand" className='nav-list'>Brand</Nav.Link>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                   
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <FontAwesomeIcon icon={faUser} className='nav-icon mx-3'/>
                                Customer list
                                </Accordion.Header>
                            <Accordion.Body className='dropdown'>
                                <Nav.Link href="/customerList3" className='nav-list'>Customer list-1</Nav.Link>
                                <Nav.Link href="/customerList2" className='nav-list'>Customer list-2</Nav.Link>
                                <Nav.Link href="/customerList3" className='nav-list'>Customer list-3</Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                   <Nav.Link href="/bookingList" className='nav-list'>
                    <FontAwesomeIcon icon={faBookOpenReader} className='nav-icon mx-3'/>
                    Booking list
                    </Nav.Link>

                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <FontAwesomeIcon icon={faBookOpenReader} className='nav-icon mx-3'/>
                                Indox
                            </Accordion.Header>
                            <Accordion.Body className='dropdown'>
                                <Nav.Link  href="/companyChat" className='nav-list'>Company Chat</Nav.Link>
                                <Nav.Link  href="/customerChat" className='nav-list'>Customer Chat</Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                   <Nav.Link  href="/activeAccount" className='nav-list'>
                    <FontAwesomeIcon icon={faBookOpenReader} className='nav-icon mx-3'/>
                    Active Account
                    </Nav.Link>
                   <Nav.Link  href="/companyOwner" className='nav-list'>
                    <FontAwesomeIcon icon={faBookOpenReader} className='nav-icon mx-3'/>
                    Company owner list
                    </Nav.Link>

                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <FontAwesomeIcon icon={faBookOpenReader} className='nav-icon mx-3'/>
                                Propertys
                            </Accordion.Header>
                            <Accordion.Body className='dropdown'>
                                <Nav.Link href="/propertys1" className='nav-list'>Propertys-1 </Nav.Link>
                                <Nav.Link href="/propertys2" className='nav-list'>Propertys-2 </Nav.Link>
                                <Nav.Link href="/propertys3" className='nav-list'>Propertys-3 </Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>


                   <Nav.Link href="/customerReview" className='nav-list'>
                    <FontAwesomeIcon icon={faBookOpenReader} className='nav-icon mx-3'/>
                    Customer Review
                    </Nav.Link>
                   <Nav.Link href="/logout" className='nav-list'>
                    <FontAwesomeIcon icon={faBookOpenReader} className='nav-icon mx-3'/>
                    Logout
                    </Nav.Link>
                </Nav>
             </div>
        </Col>


        <Col lg={9} md={9} sm={10}>
            <div className='section-1 mt-5'>
                    <div className='section-text-1'>
                        <p>Number of Booking</p>
                        <h5>3500+</h5>
                        <ProgressBar variant="warning" now={50} />
                        <small className='d-flex mt-3'>
                            <span className='text-start'>Last search</span>
                            <span className='percentage'>90%</span>
                        </small>
                    </div>
             
                    <div className='section-text-1'>
                        <p>New Reviews</p>
                        <h5>$35000+</h5>
                        <ProgressBar variant="info" now={60} />
                        <small className='d-flex mt-3'>
                            <span>Last search</span>
                            <span className='percentage'>90%</span>
                        </small>
                    </div>
               
               
                    <div className='section-text-1's>
                        <p>Total of Companey</p>
                        <h5>155+</h5>
                        <ProgressBar variant="danger" now={90} />
                        <small className='d-flex mt-3'>
                            <span>Last search</span>
                            <span className='percentage'>90%</span>
                        </small>
                    </div>
           </div> 

           <div className=''>
            <Row>
                <Col lg={4} md={4} sm={9}>
                     <h4 className='booking-border mt-5'>Last Booking</h4>
                    <div className='booking-border-2'>
                        <div className='booking mt-3'>
                           <img src={girl1} alt="" /> 
                           <div className='booking-text mx-3'>
                                <p> <span className='fw-bold'>Jannat Borna</span> <br />
                                <span>To improve the text 2023</span></p>
                           </div>
                            <div>
                                <FontAwesomeIcon icon={faArrowRight} className='mx-2'/>
                            </div>
                        </div>
                        <div className='booking mt-3'>
                            <img src={girl2} alt="" /> 
                            <div className='booking-text mx-3'>
                               <p> <span className='fw-bold'>Jannat Borna</span> <br />
                               <span>To improve the text 2023</span></p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faArrowRight} className='mx-2'/>
                            </div>
                        </div>
                        <div className='booking mt-3'>
                            <img src={boy1} alt="" /> 
                            <div className='booking-text mx-3'>
                                <p> <span className='fw-bold'>Jannat Borna</span> <br />
                                <span>To improve the text 2023</span></p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faArrowRight} className='mx-2'/>
                            </div>
                        </div>
                        <div className='booking mt-3'>
                            <img src={boy2} alt="" /> 
                            <div className='booking-text mx-3'>
                                <p> <span className='fw-bold'>Jannat Borna</span> <br />
                                <span>To improve the text 2023</span></p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faArrowRight} className='mx-2'/>
                            </div>
                        </div>
                        <div className='text-end'>
                            <a href="/">See More</a>
                        </div>
                    </div>
                </Col>

                <Col lg={5} md={5} sm={9}>
                    <div>
                        <h2>1</h2>
                    </div>
                </Col>
            </Row>
           </div>
        
        </Col>
    </Row>

        </div>
    );
};

export default Home;