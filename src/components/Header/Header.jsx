/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ReactComponent as CartSvg } from '../../images/sprite/cart.svg';
import { ReactComponent as GlassSvg } from '../../images/sprite/glass.svg';
import { ReactComponent as LogoSvg } from '../../images/sprite/logo.svg';
// import LogoSvg from '../../images/logo.svg';
import "./Header.scss";

const Header = ({ showHeader }) => {
  return (
    <header className={ showHeader ? "header checked" : "header"}>
      <nav className={ showHeader ? "header__nav checkedTag" : "header__nav"}>
        <a href="#" className={ showHeader ? "header__logoLink checkedTag" : "header__logoLink"}>
          {/* <h1 className={ showHeader ? "header__logo checkedTag" : "header__logo"}>MoGo</h1> */}
          {/* <img className={ showHeader ? "header__logo checkedTag" : "header__logo"} src={LogoSvg} alt="logo"/> */}
          {/* <svg>
            <use href="../../images/logo.svg"></use>
          </svg> */}
          <LogoSvg className="header__listItemCart"/> 
        </a>
        <ul className={ showHeader ? "header__list checkedTag" : "header__list"}>
          <li className={ showHeader ? "header__listItem checkedTag" : "header__listItem"}>
            <a href="#" className={ showHeader ? "header__listItemLink checkedTag" : "header__listItemLink"}>
              about
            </a>
          </li>
          <li className={ showHeader ? "header__listItem checkedTag" : "header__listItem"}>
            <a href="#" className={ showHeader ? "header__listItemLink checkedTag" : "header__listItemLink"}>
              service
            </a>
          </li>
          <li className={ showHeader ? "header__listItem checkedTag" : "header__listItem"}>
            <a href="#" className={ showHeader ? "header__listItemLink checkedTag" : "header__listItemLink"}>
              work
            </a>
          </li>
          <li className={ showHeader ? "header__listItem checkedTag" : "header__listItem"}>
            <a href="#" className={ showHeader ? "header__listItemLink checkedTag" : "header__listItemLink"}>
              blog
            </a>
          </li>
          <li className={ showHeader ? "header__listItem checkedTag" : "header__listItem"}>
            <a href="#" className={ showHeader ? "header__listItemLink checkedTag" : "header__listItemLink"}>
              contact
            </a>
          </li>
          <li className={ showHeader ? "header__listItem checkedTag" : "header__listItem"}>
            <a href="#" className={ showHeader ? "header__listItemLink checkedTag" : "header__listItemLink"}>
              <CartSvg className="header__listItemCart" />
            </a>
          </li>
          <li className={ showHeader ? "header__listItem checkedTag" : "header__listItem"}>
            <a href="#" className={ showHeader ? "header__listItemLink checkedTag" : "header__listItemLink"}>
              <GlassSvg className="header__listItemGlass" /> 
            </a>
          </li>
        </ul>
      </nav>

      <div className={ showHeader ? "header__info checkedTag" : "header__info"}>
        <h2 className={ showHeader ? "header__infoTitle checkedTag" : "header__infoTitle"}>creative template</h2>
        <h3 className={ showHeader ? "header__infoSubtitle checkedTag" : "header__infoSubtitle"}>welcome to mogo</h3>
        <a href="#" className={ showHeader ? "header__infoLink checkedTag" : "header__infoLink"}>
          learn more
        </a>
      </div>
    </header>
  );
};

export default Header;







