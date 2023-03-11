import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo1 from '../../imgs/Logo.jpg';
import { Form } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
const Brand = () => {
  return (
    <div>
      <Navbar expand='lg' sticky='top' className='navbar__1'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              src={Logo1}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className='toogle-1'
          />
          <Navbar.Collapse className='justify-content-center'>
            <Nav>
              <Nav.Link href='#home' className='Nav__1'>
                Home
              </Nav.Link>
              <Nav.Link href='#Features' className='Nav__1'>
                Features
              </Nav.Link>
              <Nav.Link href='#Explorer' className='Nav__1'>
                Explorer
              </Nav.Link>
              <Nav.Link href='#Register' className='Nav__1'>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className='btn-0'>
            <motion.button
              className='login'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => null}>
              Login{' '}
            </motion.button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Brand;
