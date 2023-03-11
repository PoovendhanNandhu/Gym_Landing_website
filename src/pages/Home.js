import React from 'react';
import Container from 'react-bootstrap/Container';
import Brand from './components/Navbar/Navbar.js';
import Footer from './components/footer/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../pages/Home.css';
import Banner from '../pages/banner.png';
import { motion } from 'framer-motion';
import ParallaxText from '../pages/ParallaxText.js';
import MySwiper from '../pages/mySwiper.js';
import ClientReviewCarousel from '../pages/Carousel_1.js';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Brand />
      <div className='container__1'>
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='header__1'>
                Motivation is what gets you started. <br />
                <span className='header__2'>
                  Habit is what keeps you going.
                </span>{' '}
              </motion.h1>
              <Link to='/Register'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='btn__1'>
                  Get Started
                </motion.button>
              </Link>
            </Col>

            <Col xs={12} lg={6}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <motion.img
                  src={Banner}
                  className='img_bg_1'
                  alt='ntg'
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='parallaxx'>
        <ParallaxText baseVelocity={-5}>Program</ParallaxText>
        <ParallaxText baseVelocity={5}>Program</ParallaxText>
      </div>
      <div>
        <MySwiper />
      </div>
      <div>
        <h1 className='down_header'>Client Reviews</h1>
        <ClientReviewCarousel className='reviews' />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
