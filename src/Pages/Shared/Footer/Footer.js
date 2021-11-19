import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="scroll-top mt-5">
        <button onClick={scrollToTop}>Back To Top</button>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row footer-details">
            <div className="col-4 col-lg-3">
              <h4>Customer Care</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/contact">Delivery</a>
                </li>
                <li>
                  <a href="/contact">Click & Collect</a>
                </li>
                <li>
                  <a href="/contact">Returns & Refunds</a>
                </li>
                <li className="footer-display-none">
                  <a href="/contact">Payment Option</a>
                </li>
                <li className="footer-display-none">
                  <a href="/contact">Payment Security</a>
                </li>
                <li className="footer-display-none">
                  <a href="/contact">FAQs</a>
                </li>
                <li>
                  <a href="/contact">Watches Of Switzerland USA</a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-lg-3">
              <h4>Services & Repairs</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/contact">Watch Services</a>
                </li>
                <li>
                  <a href="/contact">Watches Of Switzerland Protect</a>
                </li>
                <li>
                  <a href="/contact">Sell Your Watch</a>
                </li>
                <li>
                  <a href="/contact">Book An Appointment</a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-lg-3">
              <h4>Yours Security</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/contact">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/contact">Privacy Policy</a>
                </li>
                <li>
                  <a href="/contact">Cookie Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-lg-3">
              <h4>Follow Us on</h4>
              <div class="social-links">
                <NavLink to="#">
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </NavLink>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </NavLink>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </NavLink>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-description footer-display-none mt-4">
          <p>© 2021 Watches of DIALZ</p>
          <small>
            Watches of DIALZ is a trading name of Watches of DIALZ
            Company Limited. Registered Office: Aurum House, 2 Elland Road,
            Braunstone, Leicester, LE3 1TT, Registered in England and Wales,
            Company number 00146087. Registered VAT Number 834 8634 04. Watches
            of DIALZ Company Limited acts as a broker and not a lender and
            offers finance from Secured Trust Bank PLC trading as V12 Retail
            Finance and PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard
            Royal L-2449, Luxembourg trading as PayPal Credit. Watches of
            DIALZ Company Limited is authorised by the Finance Conduct
            Authority. Our registration number is 308710. Credit provided is
            subject to age and status. Terms and Conditions apply. UK residents
            only. We may receive a commission if your application is successful,
            and the amount may vary depending on the product chosen and the
            amount of credit taken out.
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
