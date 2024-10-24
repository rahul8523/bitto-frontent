/* eslint-disable no-unused-vars */

import React, { useRef } from 'react';

import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import RightArrow from '../assets/right-arrow.png'
import Kamal from '../assets/kamal.png'
import Kamal2 from '../assets/member/kamlas546.jpg'
import MembershipCTA from '../Components/MembershipCTA'
import Roadmap from '../Components/Roadmap'
import Discount from '../assets/Discount.png'
import Development from '../assets/Development.png'
import Professional from '../assets/Professional.png'
import Trades from '../assets/Trades.png'
import { Link } from 'react-router-dom'


const Membership = () => {


    return (
        <>
 {/* Home Banner */}
 <div className="h-100 member-img">
<div className='banner-content-membership container'>
   <div className=''>
      <h4 className='mem-text text-white' style={{ fontSize: "30px" }}>
      Welcome to
      </h4>
      <h4 className="mem-text sub-heading text-white">
      Bihar International Trade Organization
      </h4>
      <h2 className="main-banner-heading-membership pt-3 m-0 text-white">
        <span>BITO</span> Membership</h2>
 
   </div>
</div>
</div>
{/* Second Section */}
<div style={{ padding: '70px 0' }} className='p-sm-3'>
<Container>
   <h1 className='text-center membership-heading d-none d-sm-block'>Become A Member</h1>
   <h1 className='text-center membership-heading d-block d-sm-none'>Become <br/>A Member</h1>
   <div style={{ gap: '10px', marginTop: '0px' }} className='becomeMember-2-heading'>
   <a style={{ textDecoration: 'none' }} href="#enrollNow">
   <Button className=' py-2 member-btn'> Individual <small style={{fontSize:'16px'}}> (BITO)</small></Button>
   </a>
   <a style={{ textDecoration: 'none' }} href="#enrollNow">
   <Button style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }} className=' py-2 member-btn'>Corporate <small style={{ fontSize: '16px' }}> (BITO Industry Association) </small>
   </Button>
   </a>
   </div>
</Container>
</div>
<hr />
{/* Third Section */}
<Container className='mt-5'>
   <Row>
      <Col lg={4}>
      <h2 style={{ color: '#b27f4a' }} className='section-2-head'>Benefits of <br /> BITO Membership</h2>
      <div className='infographic-container'>
         <div className='infographic-div'>
            <Image src={Discount} alt='discount' />
            <p>Access to Exclusive Trade Resources and Markets</p>
         </div>
         <div className='infographic-div'>
            <Image src={Professional} alt='discount' />
            <p> Professional Connections: Network with industry leaders and global partners.</p>
         </div>
         <div className='infographic-div'>
            <Image src={Development} alt='discount' />
            <p>Professional Development: Enhance skills through workshops, seminars, and
               training.
            </p>
         </div>
         <div className='infographic-div'>
            <Image src={Trades} alt='discount' />
            <p>Exclusive Discounts: Avail discounts on trade services and events.</p>
         </div>
      </div>
      </Col>
      <Col className='left-side-div' lg={4}>
      <h2 style={{ color: '#b27f4a' }} className='section-2-head'>Transform Bihar <br /> Together, We Can</h2>
      <div className='section-para'>
         <p>BITO invites investors, organizations, NRIs, and HNIs to be part of this transformative journey.</p>
         <p>
            With a dedicated team, advanced infrastructure, and extensive resources, we offer a seamless experience through our Single-Window Clearance system.
         </p>
         <p style={{fontSize:'22px'}}>
            <small style={{ fontWeight: 'bold' }}>Explore diverse opportunities </small>
            to make
            a significant impact:
         </p>
      </div>
      </Col>
      <Col
      style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
      }}
      lg={4}>
      <Image style={{ width: '100%' }} src={Kamal} alt="img" className='d-none d-sm-block'/>
      <Image style={{ width: '100%' }} src={Kamal2} alt="img" className='d-sm-none'/>
      </Col>
   </Row>
</Container>
{/* Forth Seciton */}
<Roadmap />
{/* CTA here */}
<div id="enrollNow">
   <MembershipCTA />
</div>

        </>
    )
}

export default Membership