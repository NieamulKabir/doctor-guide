import React from 'react';
import logo from '../../utils/image/logo.png'

const Footer = () => {
    return (
        <div className=' mt-24'>
            <footer className="footer p-10 bg-[#273240]  text-white pt-20">
                <div>
                    <p className='font-mono font-extrabold text-base flex items-center text-[#FF8B42]  md:text-[28px] my-[10px]'>
                        <img className='md:w-[49px] md:h-[55px] ' src={logo} alt="" />
                        Doctor Guide
                    </p>
                    <p className=' text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nulla ut cras velit senectus id tellus aliquam enim felis. <br /> Sed commodo cursus tellus sapien, viverra imperdiet <br /> morbi dignissim. Consequat in metus arcu eget.
                    </p>

                </div>
                <div>
                    <span className="footer-title">Our Services</span>
                    <a className="link link-hover">Bills & Insurance</a>
                    <a className="link link-hover">Cancer Screening</a>
                    <a className="link link-hover">Cardiac Surgery</a>
                    <a className="link link-hover">Neurology</a>
                    <a className="link link-hover">Covid-19 Vaccine</a>
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <a className="link link-hover">
                        1234 Uttara Khal Pahr,<br /> Image Osman Center,<br />
                        Sonargao, Janapath,
                    </a>
                    <a className="link link-hover">09876543211</a>
                    <a className="link link-hover">doctorguide@example.com</a>

                </div>
                <div>
                    <span className="footer-title">Doctors Schedule</span>
                    <p>
                        At vero eos et accusam et justou <br /> dolores et ea rebum tet clita kasd  <br /> gubergren no sea takimata.
                    </p>
                </div>
            </footer>

            <footer className="footer px-10 py-10 border-t bg-[#273240] text-white border-base-300">
                <div className="items-center grid-flow-col">
                    <p>
                        Copyright © 2022. All Rights Reserved. Made with  by Solutya.
                    </p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className='flex mr-2'>
                        <p className='pr-5'>
                            Latest news
                        </p>
                        <p className='pr-5'>
                            Privacy Policy
                        </p>
                        <p className='pr-5'>
                            Terms & Conditions
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;