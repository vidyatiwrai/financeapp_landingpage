import React from 'react';
import Logo from '../assests/img/logo.svg';
import Email from '../assests/img/mail.svg';
import Fuel from "../assests/img/fuel.png"
import Phone from '../assests/img/phone.svg';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-lists">
                    <h1 className="logo">
                        <img src={Fuel} alt="Fuel" sizes='smaller'/>
                        <img src={Logo} alt="Logo" />
                    </h1>
                    <ul className="info-1">
                        <li className="info">
                            <img src={Email} alt="Email" />
                            <p>Help@Frybix.com</p>
                        </li>
                        <li className="info">
                            <img src={Phone} alt="Phone" />
                            <p>+1234 456 678 89</p>
                        </li>
                    </ul>
                </div>
                <div className="footer-lists">
                    <h1>Links</h1>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Bookings</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer-lists">
                    <h1>Legal</h1>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                <div className="footer-lists">
                    <h1>Product</h1>
                    <ul>
                        <li>Take Tour</li>
                        <li>Live Chat</li>
                        <li>Reviews</li>
                    </ul>
                </div>
                <div className="footer-lists">
                    <h1>Newsletter</h1>
                    <ul>
                        <li>Stay Up To Date</li>
                    </ul>
                    <form>
                        <input type="text" placeholder="Your email" />
                        <button className="btn">Subscribe</button>
                    </form>
                </div>
            </div>
            <hr />
            <div className="footer-copyright">Copyright 2022 uifry.com All Rights Reserved</div>
        </div>
    );
};
