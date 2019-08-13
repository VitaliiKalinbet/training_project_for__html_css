/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ReactComponent as CartSvg } from '../../images/sprite/cart.svg';
import { ReactComponent as GlassSvg } from '../../images/sprite/glass.svg';
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <a href="#" className="header__logoLink">
          <h1 className="header__logo">MoGo</h1>
        </a>
        <ul className="header__list">
          <li className="header__listItem">
            <a href="#" className="header__listItemLink">
              about
            </a>
          </li>
          <li className="header__listItem">
            <a href="#" className="header__listItemLink">
              service
            </a>
          </li>
          <li className="header__listItem">
            <a href="#" className="header__listItemLink">
              work
            </a>
          </li>
          <li className="header__listItem">
            <a href="#" className="header__listItemLink">
              blog
            </a>
          </li>
          <li className="header__listItem">
            <a href="#" className="header__listItemLink">
              contact
            </a>
          </li>
          <li className="header__listItem">
            <a href="#" className="header__listItemLink">
              <CartSvg className="header__listItemCart" />
            </a>
          </li>
          <li className="header__listItem">
            <a href="#" className="header__listItemLink">
              <GlassSvg className="header__listItemGlass" /> 
            </a>
          </li>
        </ul>
      </nav>

      <div className="header__info">
        <h2 className="header__infoTitle">creative template</h2>
        <h3 className="header__infoSubtitle">welcome to mogo</h3>
        <a href="#" className="header__infoLink">
          learn more
        </a>
      </div>
    </header>
  );
};

export default Header;