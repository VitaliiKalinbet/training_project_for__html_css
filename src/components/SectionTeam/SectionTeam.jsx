/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ReactComponent as FacebookSvg } from "../../images/sprite/facebook.svg";
import { ReactComponent as TwitterSvg } from "../../images/sprite/twitter.svg";
import { ReactComponent as PinterestSvg } from "../../images/sprite/pinterest.svg";
import { ReactComponent as InstaSvg } from "../../images/sprite/instagram.svg";
import Layer1_1x from '../../images/Layer1.png';
import Layer1_2x from '../../images/Layer1@2x.png';
import Layer2_1x from '../../images/Layer2.png';
import Layer2_2x from '../../images/Layer2@2x.png';
import Layer3_1x from '../../images/Layer3.png';
import Layer3_2x from '../../images/Layer3@2x.png';
import "./SectionTeam.scss";

const SectionTeam = () => {
  return (
    <section className="team">
      <h4 className="team__title">who we are</h4>
      <h5 className="team__subtitle">meet our team</h5>
      <p className="team__subtitleAbout">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <ul className="team__list">
        <li className="team__listItem">
          <div className="team__listItemContainer">
            <img
              className="team__listItemImg"
              src={Layer1_1x}
              alt="default-img"
              srcSet={Layer1_2x}
              width="380"
              height="470"
            />
            <ul className="team__popUpList">
              <li className="team__popUpListItem">
                <a href="#" className="team__popUpListLink">
                  <FacebookSvg className="team__popUpListFacebook team__popUpListSvg" />
                </a>
              </li>
              <li className="team__popUpListItem">
                <a href="#" className="team__popUpListLink">
                  <TwitterSvg className="team__popUpListTwitter team__popUpListSvg" />
                </a>
              </li>
              <li className="team__popUpListItem">
                <a href="#" className="team__popUpListLink">
                  <PinterestSvg className="team__popUpListPinterest team__popUpListSvg" />
                </a>
              </li>
              <li className="team__popUpListItem">
                <a href="#" className="team__popUpListLink">
                  <InstaSvg className="team__popUpListInstagram team__popUpListSvg" />
                </a>
              </li>
            </ul>
          </div>
          <h6 className="team__listItemName">Matthew Dix</h6>
          <p className="team__listItemProfession">Graphic Design</p>
        </li>

        <li className="team__listItem">
          <div className="team__listItemContainer">
            <img
              className="team__list--item-img"
              src={Layer2_1x}
              alt="default-img"
              srcSet={Layer2_2x}
              width="380"
              height="470"
            />
            <ul className="team__popUpList">
              <li className="team__popUpListItem">
                <a href="#" className="team__popUpListLink">
                  <FacebookSvg className="team__popUpListFacebook team__popUpListSvg" />
                </a>
              </li>
              <li className="team__popUpListItem">
                <a href="#" className="team__popUpListLink">
                  <TwitterSvg className="team__popUpListTwitter team__popUpListSvg" />
                </a>
              </li>
              <li className="team__popUpListItem">
                <a href="#" className="team__popUpListLink">
                  <PinterestSvg className="team__popUpListPinterest team__popUpListSvg" />
                </a>
              </li>
              <li className="team__popUpListItem">
                <a href="#" className="team__popUpListLink">
                  <InstaSvg className="team__popUpListInstagram team__popUpListSvg" />
                </a>
              </li>
            </ul>
          </div>
          <h6 className="team__listItemName">Christopher Campbell</h6>
          <p className="team__listItemProfession">Branding/UX design</p>
        </li>

        <li className="team__listItem">
          <div className="team__listItemContainer">
            <img
              className="team__list--item-img"
              src={Layer3_1x}
              alt="default-img"
              srcSet={Layer3_2x}
              width="380"
              height="470"
            />
            <ul className="team__popUpList">
              <li className="team__popUpListItem">
                <a href="#" className="team__popUpListLink">
                  <FacebookSvg className="team__popUpListFacebook team__popUpListSvg" />
                </a>
              </li>
              <li className="team__popUpListItem">
                <a href="#" className="team__popUpListLink">
                  <TwitterSvg className="team__popUpListTwitter team__popUpListSvg" />
                </a>
              </li>
              <li className="team__popUpListItem">
                <a href="#" className="team__popUpListLink">
                  <PinterestSvg className="team__popUpListPinterest team__popUpListSvg" />
                </a>
              </li>
              <li className="team__popUpListItem">
                <a href="#" className="team__popUpListLink">
                  <InstaSvg className="team__popUpListInstagram team__popUpListSvg" />
                </a>
              </li>
            </ul>
          </div>
          <h6 className="team__listItemName">Michael Fertig</h6>
          <p className="team__listItemProfession">Developer</p>
        </li>
      </ul>
    </section>
  );
};

export default SectionTeam;