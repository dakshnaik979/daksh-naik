import React from 'react';

function Testimonials() {
  const reviews = [
    { id: 1, user: 'Alex M.', text: 'Fast delivery and the headphones feel like clouds!' },
    { id: 2, user: 'Sam K.', text: 'Love the minimalist design of this shop. Very peaceful experience.' }
  ];

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#ffffff', textAlign: 'center' }}>
      <h3 style={{ color: '#6f6df5', marginBottom: '25px' }}>What Our Customers Say</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {reviews.map((review) => (
          <div key={review.id} style={{
            backgroundColor: '#ebf8ff',
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '300px',
            borderLeft: '4px solid #63b3ed'
          }}>
            <p style={{ fontStyle: 'italic', color: '#2c5282', margin: '0 0 10px 0' }}>"{review.text}"</p>
            <h5 style={{ color: '#4a5568', margin: 0 }}>- {review.user}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;