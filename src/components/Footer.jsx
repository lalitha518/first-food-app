import React from 'react';

const Footer = () => {
  return (
    <footer className="justify-between bg-blue-950 text-white">
      <p>&copy; {new Date().getFullYear()} Restaurant App. All rights reserved.</p>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#contact">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
