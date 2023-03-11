import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../pages/style_carousel.css';

const ClientReviewCarousel = () => {
  const reviews = [
    {
      name: 'John Doe',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis neque nec scelerisque sagittis.',
      designation: 'CEO, XYZ Company',
    },
    {
      name: 'Jane Doe',
      review:
        'Duis vel convallis sapien. Proin ac diam vitae libero fringilla tincidunt. Etiam eget lobortis risus.',
      designation: 'Marketing Manager, ABC Inc.',
    },
    {
      name: 'Bob Smith',
      review:
        'Vivamus lacinia sagittis ligula vel ultrices. Sed vitae augue ac diam rhoncus bibendum ac nec magna.',
      designation: 'CTO, PQR Enterprises',
    },
  ];

  return (
    <Carousel>
      {reviews.map((review, index) => (
        <Carousel.Item key={index}>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <p className='text-center'>{review.review}</p>
            <h5>{review.name}</h5>
            <small>{review.designation}</small>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ClientReviewCarousel;
