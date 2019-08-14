/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__content">
                <div className="footer__license">
                    <h6 className="footer__licenseAbout">© 2016 MoGo free PSD template by</h6>
                    <a href="#" className="footer__licenseLink">Laaqiq</a>
                </div>
                <div className="footer__info">
                    <input className="footer__infoEmail" type="text" placeholder="your email"/>
                    <button type="submit" className="footer__infoSubscribe">subscribe</button>
                </div>
            </section>
        </footer>
    );
};

export default Footer;