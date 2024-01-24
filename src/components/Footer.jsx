/* eslint-disable no-unused-vars */
import React from 'react';
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <header className="footer-title">WEB LOGO</header> 
                    <p>Some footer text about the</p>
                    <p>Agency. Just a littel description to</p>
                    <p>help people understand you better</p>

                    <div className='flex justify-between pt-0 max-w-[200px] w-full'>
                        <a href="#facebook" target="_blank">
                            <FaFacebookF className="cursor-pointer" size={20} />
                        </a>
                        <a href="#twitter" target="_blank">
                            <FaTwitter className="cursor-pointer" size={20} />
                        </a>
                        <a href="#linkedin" target="_blank">
                            <FaLinkedinIn className="cursor-pointer" size={20}/>
                        </a> 
                        <a href="#instagram" target="_blank">
                            <FaInstagram className="cursor-pointer" size={20}/>
                        </a>
                    </div>

                    <div className='pt-12'>
                        <p>Copyright Design Agency 2022</p>
                    </div>
                </div> 
                <nav>
                    <header className="footer-title">Quick Links</header> 
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Portfolio</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact Us</a>
                </nav> 
                <nav>
                    <header className="footer-title">Address</header> 
                    <p>Design Agency Head Office</p>
                    <p>Airport Road</p>
                    <p>United Arab Emirate</p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;