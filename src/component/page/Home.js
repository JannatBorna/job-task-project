import React from 'react';
import { Row, Col, Nav, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGauge, faClipboard, faUser, faBookOpenReader, faArrowRight, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
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

           <div className='mt-5'>
            <Row>
                <Col lg={4} md={4} sm={9}>
                     
                    <div className='booking-border-2'>
                        <h4 className='mt-2'>Last Booking</h4>
                        <hr />
                        <div className='booking mt-3 p-1'>
                           <img src={girl1} alt="" /> 
                           <div className='booking-text mx-3'>
                                <p> <span className='fw-bold'>Jannat Borna</span> <br />
                                <span>To improve the text 2023</span></p>
                           </div>
                            <div>
                                <FontAwesomeIcon icon={faArrowRight} className='arrow-icon'/>
                            </div>
                        </div>
                        <div className='booking mt-3 p-1'>
                            <img src={girl2} alt="" /> 
                            <div className='booking-text mx-3'>
                               <p> <span className='fw-bold'>Jannat Borna</span> <br />
                               <span>To improve the text 2023</span></p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faArrowRight} className='arrow-icon'/>
                            </div>
                        </div>
                        <div className='booking mt-3 p-1'>
                            <img src={boy1} alt="" /> 
                            <div className='booking-text mx-3'>
                                <p> <span className='fw-bold'>Jannat Borna</span> <br />
                                <span>To improve the text 2023</span></p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faArrowRight} className='arrow-icon'/>
                            </div>
                        </div>
                        <div className='booking mt-3 p-1'>
                            <img src={boy2} alt="" /> 
                            <div className='booking-text mx-3'>
                                <p> <span className='fw-bold'>Jannat Borna</span> <br />
                                <span>To improve the text 2023</span></p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faArrowRight} className='arrow-icon'/>
                            </div>
                        </div>
                        <div className='text-end mx-2'>
                            <a href="/" className='a-tag'>See More</a>
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


        <div className='mt-5'>

    <Table striped bordered hover size="sm">
        <thead>
        <tr>
          <td colSpan={7} className='text-start'>
            <span className='summary'>Booking Summary</span>
            <br />
           <small>Open the Pulse app on your mobile phone</small>
          </td>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>No</th>
          <th>CLIENT NAME</th>
          <th>COMPAMY ID</th>
          <th>BOOKING TO</th>
          <th>COST OF HOTEL</th>
          <th>STSTUS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>#001</td>
            <td>NK MARKO</td>
            <td>#CM012G67</td>
            <td>Hotel Arcone</td>
            <td>$150</td>
            <td>
                <button className='status-panding'>panding</button>
            </td>
        </tr>
        <tr>
            <td>#002</td>
            <td>NK MARKO</td>
            <td>#CM012G67</td>
            <td>Hotel Arcone</td>
            <td>$150</td>
            <td>
                <button className='status-cencel'>cancel</button>
            </td>
        </tr>

        <tr>
            <td>#003</td>
            <td>NK MARKO</td>
            <td>#CM012G67</td>
            <td>Hotel Arcone</td>
            <td>$150</td>
            <td>
                <button className='status-approved'>approved</button>
            </td>
        </tr>

         <tr>
            <td>#004</td>
            <td>NK MARKO</td>
            <td>#CM012G67</td>
            <td>Hotel Arcone</td>
            <td>$150</td>
            <td>
                <button className='status-running'>running</button>
            </td>
        </tr>

        <tr>
            <td>#005</td>
            <td>NK MARKO</td>
            <td>#CM012G67</td>
            <td>Hotel Arcone</td>
            <td>$150</td>
            <td>
                <button className='status-panding'>panding</button>
            </td>
        </tr>

        <tr>
            <td>#006</td>
            <td>NK MARKO</td>
            <td>#CM012G67</td>
            <td>Hotel Arcone</td>
            <td>$150</td>
            <td>
                <button className='status-flowing'>flowing</button>
            </td>
        </tr>

        <tr>
            <td>#007</td>
            <td>NK MARKO</td>
            <td>#CM012G67</td>
            <td>Hotel Arcone</td>
            <td>$150</td>
            <td>
                <button className='status-process'>process</button>
            </td>
        </tr>

        <tr>
            <td colSpan={7} className='last-gap'></td>
        </tr>
      </tbody>
    </Table>
    </div>
       

                    <div className='last-eection'>
                        <div>
                            <div className='booking-border-2'>
                            <h4 className='mt-2 mx-2 text-start text-h4'>Top Company conversion rate</h4>
                            <p className='mx-2 text-start text-p'>Based on their performance</p>
                        <hr />
                        <div className='booking mt-3 p-1'>
                           <img src={girl1} alt="" /> 
                           <div className='booking-text mx-3'>
                                <p> <span className='fw-bold'>Jannat Borna</span> <br />
                                <span>To improve text 2023</span></p>
                           </div>
                            <div className='last-section-icon'>
                                <h6>90%</h6>
                            </div>
                        </div>
                        <div className='booking mt-3 p-1'>
                            <img src={girl2} alt="" /> 
                            <div className='booking-text mx-3'>
                               <p> <span className='fw-bold'>Jannat Borna</span> <br />
                               <span>To improve text 2023</span></p>
                            </div>
                            <div className='last-section-icon'>
                                <h6>92%</h6>
                            </div>
                        </div>
                        <div className='booking mt-3 p-1'>
                            <img src={boy1} alt="" /> 
                            <div className='booking-text mx-3'>
                                <p> <span className='fw-bold'>Jannat Borna</span> <br />
                                <span>To improve text 2023</span></p>
                            </div>
                            <div className='last-section-icon'>
                                <h6>72%</h6>
                            </div>
                        </div>
                        <div className='booking mt-3 p-1'>
                            <img src={boy2} alt="" /> 
                            <div className='booking-text mx-3'>
                                <p> <span className='fw-bold'>Jannat Borna</span> <br />
                                <span>To improve text 2023</span></p>
                            </div>
                            <div className='last-section-icon'>
                                <h6>90%</h6>
                            </div>
                        </div>
                        <div className='text-end mx-2'>
                            <a href="/" className='a-tag'>See More</a>
                        </div>
                    </div>
        </div>

        <div>
                        <div className='booking-border-2'>
                            <h4 className='mt-2 mx-2 text-start text-h4'>Activity Account</h4>
                            <p className='mx-2 text-start text-p'>Activity their account</p>
                        <hr />
                        <div className='booking mt-3 p-1'>
                           <img src={girl1} alt="" /> 
                           <div className='booking-text mx-3'>
                                <p> <span className='fw-bold'>Jannat Borna</span> <br />
                                <span>To improve the text 2023</span></p>
                           </div>
                            <div className='check-icon'>
                                <FontAwesomeIcon icon={faSquareCheck} />
                            </div>
                        </div>
                        <div className='booking mt-3 p-1'>
                            <img src={girl2} alt="" /> 
                            <div className='booking-text mx-3'>
                               <p> <span className='fw-bold'>Jannat Borna</span> <br />
                               <span>To improve the text 2023</span></p>
                            </div>
                            <div className='arrow-icon'>
                                <FontAwesomeIcon icon={faSquareCheck} />
                            </div>
                        </div>
                        <div className='booking mt-3 p-1'>
                            <img src={boy1} alt="" /> 
                            <div className='booking-text mx-3'>
                                <p> <span className='fw-bold'>Jannat Borna</span> <br />
                                <span>To improve the text 2023</span></p>
                            </div>
                            <div className='arrow-icon'>
                                <FontAwesomeIcon icon={faSquareCheck} />
                            </div>
                        </div>
                        <div className='booking mt-3 p-1'>
                            <img src={boy2} alt="" /> 
                            <div className='booking-text mx-3'>
                                <p> <span className='fw-bold'>Jannat Borna</span> <br />
                                <span>To improve the text 2023</span></p>
                            </div>
                            <div className='check-icon'>
                                <FontAwesomeIcon icon={faSquareCheck} />
                            </div>
                        </div>
                        <div className='text-end mx-2'>
                            <a href="/" className='a-tag'>See More</a>
                        </div>
                    </div>
                </div>

          <div>                    
            <div className='booking-border-2'>
                        <h4 className='mx-2 text-start text-h4'>Monthly Income</h4>
                        <p className='mx-2 text-start text-p'>income of last month and date </p>
                        <hr />
                        <div className='text-start p-1 bar'>
                            <h5>$35000+</h5>
                            <ProgressBar variant="danger" now={70} className='progress-icon'/>
                            <p>Last month</p>
                        </div>
                        
                        <div className='text-start p-1 bar'>
                            <h5>$35000+</h5>
                            <ProgressBar variant="info" now={80} className='progress-icon'/>
                            <p>Last month</p>
                        </div>

                        <div className='text-start p-1 bar'>
                            <h5>$35000+</h5>
                            <ProgressBar variant="primany" now={60} className='progress-icon'/>
                            <p>Last month</p>
                        </div>

                        <div className='text-end mx-2'>
                            <a href="/" className='a-tag'>See More</a>
                        </div>
                    </div>
        </div>






     
    </div>        
        </Col>
    </Row>

        </div>
    );
};

export default Home;