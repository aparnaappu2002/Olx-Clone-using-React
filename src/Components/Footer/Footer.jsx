import React from 'react';
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="modern-footer">
      {/* Newsletter Section */}
      {/* <div className="newsletter-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <div className="newsletter-content">
                <h2>Stay Updated with OLX</h2>
                <p>Subscribe to our newsletter for exclusive offers and updates</p>
                <div className="input-group">
                  <input type="email" placeholder="Enter your email address" />
                  <button className="subscribe-btn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      {/* Main Footer Content */}
      <div className="main-footer-content">
        <div className="container">
          <div className="row">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="brand-section">
                <h1 className="footer-logo">OLX</h1>
                <p className="brand-description">
                  India's largest marketplace for buying and selling anything you can imagine.
                </p>
                <div className="download-buttons">
                  <button className="store-btn">
                    <i className="bi bi-apple"></i>
                    <span>
                      <small>Download on the</small>
                      App Store
                    </span>
                  </button>
                  <button className="store-btn">
                    <i className="bi bi-google-play"></i>
                    <span>
                      <small>Get it on</small>
                      Google Play
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#" className="link-item"><span>About Us</span></a></li>
                <li><a href="#" className="link-item"><span>Contact</span></a></li>
                <li><a href="#" className="link-item"><span>Careers</span></a></li>
                <li><a href="#" className="link-item"><span>Support</span></a></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="footer-title">Top Categories</h3>
              <ul className="footer-links">
                <li><a href="#" className="link-item"><i className="bi bi-car-front"></i><span>Cars & Vehicles</span></a></li>
                <li><a href="#" className="link-item"><i className="bi bi-house"></i><span>Properties</span></a></li>
                <li><a href="#" className="link-item"><i className="bi bi-phone"></i><span>Electronics</span></a></li>
                <li><a href="#" className="link-item"><i className="bi bi-briefcase"></i><span>Jobs</span></a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="footer-title">Connect With Us</h3>
              <div className="social-links">
                <a href="#" className="social-btn facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="social-btn twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="social-btn instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="social-btn linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
              <div className="contact-info">
                <p><i className="bi bi-telephone"></i> 1800-419-0019</p>
                <p><i className="bi bi-envelope"></i> support@olx.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">© 2024 OLX. All rights reserved</p>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;