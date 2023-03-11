import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='bg-black text-light'>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Our Location</h5>
            <address>
              <FaMapMarkerAlt /> 123 Main St, New York, NY 10001
            </address>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              <FaPhone /> (555) 555-5555 <br />
              <FaEnvelope /> info@gymwebsite.com
            </p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className='list-unstyled'>
              <li>
                <Link href='#'>Facebook</Link>
              </li>
              <li>
                <Link href='#'>Twitter</Link>
              </li>
              <li>
                <Link href='#'>Instagram</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className='text-center'>
          &copy; 2023 GymWebsite. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
