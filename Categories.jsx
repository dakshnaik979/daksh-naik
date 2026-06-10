import React from 'react';

function Categories() {
  const categories = ['Laptops', 'Headphones', 'Smart Watches', 'Cameras','Mobiles'];

  const handleCategoryClick = (category) => {
    alert(`Opening the ${category} section...`);
  };

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#ffffff' }}>
      <h3 style={{ color: '#4a5568', marginBottom: '20px' }}>Browse Categories</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(cat)}
            style={{
              backgroundColor: '#edf2f7',
              border: '1px solid #cbd5e0',
              padding: '10px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
              color: '#fb365d',
              fontWeight: 'bold'
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;