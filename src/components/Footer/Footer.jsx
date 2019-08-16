/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.scss';

const Footer = ({ showFooter }) => {
    return (
        <footer className={ showFooter ? "footer checked" : "footer" } id="footer">
            <section className={ showFooter ? "footer__content checkedTag" : "footer__content" }>
                <div className={ showFooter ? "footer__license checkedTag" : "footer__license" }>
                    <h6 className={ showFooter ? "footer__licenseAbout checkedTag" : "footer__licenseAbout" }>© 2016 MoGo free PSD template by</h6>
                    <a href="#" className={ showFooter ? "footer__licenseLink checkedTag" : "footer__licenseLink"}>Laaqiq</a>
                </div>
                <div className={ showFooter ? "footer__info checkedTag" : "footer__info"}>
                    <input className={ showFooter ? "footer__infoEmail checkedTag" : "footer__infoEmail"} type="text" placeholder="your email"/>
                    <button type="submit" className={ showFooter ? "footer__infoSubscribe checkedTag" : "footer__infoSubscribe"}>subscribe</button>
                </div>
            </section>
        </footer>
    );
};

export default Footer;