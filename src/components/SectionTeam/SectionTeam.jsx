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

const SectionTeam = ({ showSectionTeam }) => {
  return (
    <section className = {showSectionTeam ? "team checked" : "team"}>
      <h4 className={showSectionTeam ? "team__title checkedTag" : "team__title"}>who we are</h4>
      <h5 className={showSectionTeam ? "team__subtitle checkedTag" : "team__subtitle"}>meet our team</h5>
      <p className={showSectionTeam ? "team__subtitleAbout checkedTag" : "team__subtitleAbout"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <ul className={showSectionTeam ? "team__list checkedTag" : "team__list"}>
        <li className={showSectionTeam ? "team__listItem checkedTag" : "team__listItem"}>
          <div className={showSectionTeam ? "team__listItemContainer checkedTag" : "team__listItemContainer"}>
            <img
              src={Layer1_1x}
              alt="default-img"
              srcSet={Layer1_2x}
              width="304"
              height="376"
            />
            <ul className={showSectionTeam ? "team__popUpList checkedTag" : "team__popUpList"}>
              <li className={showSectionTeam ? "team__popUpListItem checkedTag" : "team__popUpListItem"}>
                <a href="#" className={showSectionTeam ? "team__popUpListLink checkedTag" : "team__popUpListLink"}>
                  <FacebookSvg className={showSectionTeam ? "team__popUpListFacebook team__popUpListSvg checkedTag" : "team__popUpListFacebook team__popUpListSvg"} />
                </a>
              </li>
              <li className={showSectionTeam ? "team__popUpListItem checkedTag" : "team__popUpListItem"}>
                <a href="#" className={showSectionTeam ? "team__popUpListLink checkedTag" : "team__popUpListLink"}>
                  <TwitterSvg className={showSectionTeam ? "team__popUpListTwitter team__popUpListSvg checkedTag" : "team__popUpListTwitter team__popUpListSvg"} />
                </a>
              </li>
              <li className={showSectionTeam ? "team__popUpListItem checkedTag" : "team__popUpListItem"}>
                <a href="#" className={showSectionTeam ? "team__popUpListLink checkedTag" : "team__popUpListLink"}>
                  <PinterestSvg className={showSectionTeam ? "team__popUpListPinterest team__popUpListSvg checkedTag" : "team__popUpListPinterest team__popUpListSvg"} />
                </a>
              </li>
              <li className={showSectionTeam ? "team__popUpListItem checkedTag" : "team__popUpListItem"}>
                <a href="#" className={showSectionTeam ? "team__popUpListLink checkedTag" : "team__popUpListLink"}>
                  <InstaSvg className={showSectionTeam ? "team__popUpListInstagram team__popUpListSvg checkedTag" : "team__popUpListInstagram team__popUpListSvg"} />
                </a>
              </li>
            </ul>
          </div>
          <h6 className={showSectionTeam ? "team__listItemName checkedTag" : "team__listItemName"}>Matthew Dix</h6>
          <p className={showSectionTeam ? "team__listItemProfession checkedTag" : "team__listItemProfession"}>Graphic Design</p>
        </li>

        <li className={showSectionTeam ? "team__listItem checkedTag" : "team__listItem"}>
          <div className={showSectionTeam ? "team__listItemContainer checkedTag" : "team__listItemContainer"}>
            <img
              src={Layer2_1x}
              alt="default-img"
              srcSet={Layer2_2x}
              width="304"
              height="376"
            />
            <ul className={showSectionTeam ? "team__popUpList checkedTag" : "team__popUpList"}>
              <li className={showSectionTeam ? "team__popUpListItem checkedTag" : "team__popUpListItem"}>
                <a href="#" className={showSectionTeam ? "team__popUpListLink checkedTag" : "team__popUpListLink"}>
                  <FacebookSvg className={showSectionTeam ? "team__popUpListFacebook team__popUpListSvg checkedTag" : "team__popUpListFacebook team__popUpListSvg"} />
                </a>
              </li>
              <li className={showSectionTeam ? "team__popUpListItem checkedTag" : "team__popUpListItem"}>
                <a href="#" className={showSectionTeam ? "team__popUpListLink checkedTag" : "team__popUpListLink"}>
                  <TwitterSvg className={showSectionTeam ? "team__popUpListTwitter team__popUpListSvg checkedTag" : "team__popUpListTwitter team__popUpListSvg"} />
                </a>
              </li>
              <li className={showSectionTeam ? "team__popUpListItem checkedTag" : "team__popUpListItem"}>
                <a href="#" className={showSectionTeam ? "team__popUpListLink checkedTag" : "team__popUpListLink"}>
                  <PinterestSvg className={showSectionTeam ? "team__popUpListPinterest team__popUpListSvg checkedTag" : "team__popUpListPinterest team__popUpListSvg"} />
                </a>
              </li>
              <li className={showSectionTeam ? "team__popUpListItem checkedTag" : "team__popUpListItem"}>
                <a href="#" className={showSectionTeam ? "team__popUpListLink checkedTag" : "team__popUpListLink"}>
                  <InstaSvg className={showSectionTeam ? "team__popUpListInstagram team__popUpListSvg checkedTag" : "team__popUpListInstagram team__popUpListSvg"} />
                </a>
              </li>
            </ul>
          </div>
          <h6 className={showSectionTeam ? "team__listItemName checkedTag" : "team__listItemName"}>Christopher Campbell</h6>
          <p className={showSectionTeam ? "team__listItemProfession checkedTag" : "team__listItemProfession"}>Branding/UX design</p>
        </li>

        <li className={showSectionTeam ? "team__listItem checkedTag" : "team__listItem"}>
          <div className={showSectionTeam ? "team__listItemContainer checkedTag" : "team__listItemContainer"}>
            <img
              src={Layer3_1x}
              alt="default-img"
              srcSet={Layer3_2x}
              width="304"
              height="376"
            />
            <ul className={showSectionTeam ? "team__popUpList checkedTag" : "team__popUpList"}>
              <li className={showSectionTeam ? "team__popUpListItem checkedTag" : "team__popUpListItem"}>
                <a href="#" className={showSectionTeam ? "team__popUpListLink checkedTag" : "team__popUpListLink"}>
                  <FacebookSvg className={showSectionTeam ? "team__popUpListFacebook team__popUpListSvg checkedTag" : "team__popUpListFacebook team__popUpListSvg"} />
                </a>
              </li>
              <li className={showSectionTeam ? "team__popUpListItem checkedTag" : "team__popUpListItem"}>
                <a href="#" className={showSectionTeam ? "team__popUpListLink checkedTag" : "team__popUpListLink"}>
                  <TwitterSvg className={showSectionTeam ? "team__popUpListTwitter team__popUpListSvg checkedTag" : "team__popUpListTwitter team__popUpListSvg"} />
                </a>
              </li>
              <li className={showSectionTeam ? "team__popUpListItem checkedTag" : "team__popUpListItem"}>
                <a href="#" className={showSectionTeam ? "team__popUpListLink checkedTag" : "team__popUpListLink"}>
                  <PinterestSvg className={showSectionTeam ? "team__popUpListPinterest team__popUpListSvg checkedTag" : "team__popUpListPinterest team__popUpListSvg"} />
                </a>
              </li>
              <li className={showSectionTeam ? "team__popUpListItem checkedTag" : "team__popUpListItem"}>
                <a href="#" className={showSectionTeam ? "team__popUpListLink checkedTag" : "team__popUpListLink"}>
                  <InstaSvg className={showSectionTeam ? "team__popUpListInstagram team__popUpListSvg checkedTag" : "team__popUpListInstagram team__popUpListSvg"} />
                </a>
              </li>
            </ul>
          </div>
          <h6 className={showSectionTeam ? "team__listItemName checkedTag" : "team__listItemName"}>Michael Fertig</h6>
          <p className={showSectionTeam ? "team__listItemProfession checkedTag" : "team__listItemProfession"}>Developer</p>
        </li>
      </ul>
    </section>
  );
};

export default SectionTeam;