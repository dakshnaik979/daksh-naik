import React from 'react';

function Navbar() {
  const handleNavClick = (menuItem) => {
    alert(`You clicked on ${menuItem}!`);
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: '#f0f4f8',
      borderBottom: '1px solid #e2e8f0' // Fixed: Removed the extra middle single quote
    }}>
      <h2 style={{ color: '#3b82f6', margin: 0 }}>VoltVolt</h2>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '20px',
        margin: 0,
        padding: 0
      }}>
        <li><button onClick={() => handleNavClick('Home')} style={navBtnStyle}>Home</button></li>
        <li><button onClick={() => handleNavClick('Products')} style={navBtnStyle}>Products</button></li>
        <li><button onClick={() => handleNavClick('About')} style={navBtnStyle}>About</button></li>
        <li><button onClick={() => handleNavClick('Contact')} style={navBtnStyle}>Contact</button></li>
      </ul>
    </nav>
  );
}

const navBtnStyle = {
  background: 'none',
  border: 'none',
  color: '#4a5568',
  fontSize: '16px',
  cursor: 'pointer',
  padding: '5px 10px'
};

export default Navbar;