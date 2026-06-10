import React from 'react';

function Hero() {
  const handleShopNow = () => {
    alert('MEGA SALE ! Enjoy shopping our latest products.');
  };

  return (
    <div style={{
      backgroundColor: '#fa851fd9',
      padding: '60px 20px',
      textAlign: 'center',
      borderBottom: '1px solid #975de2'
    }}>
      <h1 style={{ color: '#111211', fontSize: '36px', marginBottom: '10px' }}>
        Smart Electronics for a Peaceful Life
      </h1>
      <p style={{ color: '#362452', fontSize: '18px', marginBottom: '25px' }}>
        Elevate your tech lifestyle at ElectroWorld, your premier destination for the latest gadgets and home appliances in Pune [Google Maps]. Whether you are upgrading to a stunning 4K smart TV, exploring the newest smartphones, or seeking energy-efficient kitchen essentials, we offer top-tier brands and unbeatable prices. Visit our Kharadi showroom today or explore exclusive deals on the ElectroWorld Official Website to experience innovation firsthand!
    </p>
      <button 
        onClick={handleShopNow} 
        style={{
          backgroundColor: '#ba4fda',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          fontSize: '16px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

export default Hero;