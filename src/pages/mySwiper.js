import React from 'react';
import '../pages/Myswiper.css'; // assuming the CSS is in a separate file
import { Link } from 'react-router-dom';

function MySwiper() {
  return (
    <section className='hero-section'>
      <div className='card-grid'>
        <Link className='card'>
          <div
            className='card__background'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
            }}></div>
          <div className='card__content'>
            <p className='card__category'>Category</p>
            <h3 className='card__heading'>Muscle Buliding</h3>
          </div>
        </Link>
        <Link className='card'>
          <div
            className='card__background'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1550259979-ed79b48d2a30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=468&q=80)',
            }}></div>
          <div className='card__content'>
            <p className='card__category'>Category</p>
            <h3 className='card__heading'>For Womens</h3>
          </div>
        </Link>
        <Link className='card'>
          <div
            className='card__background'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1898&q=80)',
            }}></div>
          <div className='card__content'>
            <p className='card__category'>Category</p>
            <h3 className='card__heading'>Cutting</h3>
          </div>
        </Link>
        <Link className='card'>
          <div
            className='card__background'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=490&q=80)',
            }}></div>
          <div className='card__content'>
            <p className='card__category'>Category</p>
            <h3 className='card__heading'>Bulking</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default MySwiper;
