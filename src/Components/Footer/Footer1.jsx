import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer1() {
    return (
  
        <>
                <footer className="text-center text-lg-start text-white rounded " style={{backgroundColor: '#3e4551'}}>
                    <div className="container p-4 pb-0">
                        <section className="">

                            <div className="row">

                                <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                                <a className="navbar-brand fw-bold logo mx-4 " ><img src="Happy_Life-removebg-preview.png" alt="" height="100px" width="100px" href=""   /></a>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Molestiae modi cum ipsam ad, illo possimus laborum ut
                                        reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
                                        Reiciendis assumenda iusto sapiente inventore animi?
                                    </p>
                                </div>
                                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase">ABOUT US</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-white">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">Our Services</a>
                                        </li>
                                    </ul>
                                </div>



                                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase">Contact</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-white">999-9999-999</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">physiotherapy@gmail.com</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">Whatsapp</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </section>

                        <hr className="mb-4" />

                        <section className="mb-4 text-center">

                            <a
                                className="btn btn-outline-light  m-1"
                                href="#!"
                                role="button"
                            ><FaFacebookF/></a>

                            <a
                                className="btn btn-outline-light  m-1"
                                href="#!"
                                role="button"
                            ><FaTwitter /></a>

                            <a
                                className="btn btn-outline-light  m-1"
                                href="#!"
                                role="button"
                            ><FiInstagram />
                            </a>

                            <a
                                className="btn btn-outline-light  m-1"
                                href="#!"
                                role="button"
                            ><FaLinkedinIn/></a>

                            <a
                                className="btn btn-outline-light  m-1"
                                href="#!"
                                role="button"
                            ><FaGithub/></a>
                        </section>

                    </div>
                    <div
                        className="text-center p-3"
                        style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
                    >
                        © 2020 Copyright:HappyLife
                    </div>
                </footer>
        </>
    )
}

export default Footer1
