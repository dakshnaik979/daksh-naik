import React from 'react';

function ProductCards() {
  // Beginner-friendly dummy data array
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$99', desc: 'Noise-canceling and comfortable.' },
    { id: 2, name: 'Minimalist Smartwatch', price: '$149', desc: 'Track your daily peace and health.' },
    { id: 3, name: 'Sleek Laptop', price: '$899', desc: 'Powerful performance for your projects.' }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} has been successfully added to your cart!`);
  };

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#b6d7eec9' }}>
      <h3 style={{ textAlign: 'center', color: '#91b3ed', marginBottom: '30px' }}>Featured Products</h3>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '20px',
            width: '250px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#2d3748', margin: '10px 0' }}>{product.name}</h4>
            <p style={{ color: '#718096', fontSize: '14px' }}>{product.desc}</p>
            <p style={{ color: '#3182ce', fontWeight: 'bold', fontSize: '18px' }}>{product.price}</p>
            <button
              onClick={() => handleAddToCart(product.name)}
              style={{
                backgroundColor: '#09e2fa',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '10px',
                width: '100%'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;