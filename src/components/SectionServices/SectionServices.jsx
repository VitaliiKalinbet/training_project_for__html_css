import React from 'react';
import { ReactComponent as AlarmSvg } from '../../images/sprite/ALARM.svg';
import { ReactComponent as GraphSvg } from '../../images/sprite/GRAPH.svg';
import { ReactComponent as CompSvg } from '../../images/sprite/COMPUTER.svg';
import { ReactComponent as BookSvg } from '../../images/sprite/BOOK.svg';
import { ReactComponent as HomeSvg } from '../../images/sprite/HOME.svg';
import { ReactComponent as ImageSvg } from '../../images/sprite/IMAGE.svg';
import './SectionServices.scss';

const SectionServices = ({ showSectionServices }) => {
    return (
        <section className= {showSectionServices ? "services checked" : "services"}>
    <h4 className={showSectionServices ? "services__title checkedTag" : "services__title"}>we work with</h4>
    <h5 className={showSectionServices ? "services__subtitle checkedTag" : "services__subtitle"}>amazing services</h5>
    <ul className={showSectionServices ? "services__list checkedTag" : "services__list"}>
      <li className={showSectionServices ? "services__listItem checkedTag" : "services__listItem"}>
        <AlarmSvg className={showSectionServices ? "services__listItemSvg checkedTag" : "services__listItemSvg"}/> 
        <h6 className={showSectionServices ? "services__listItemTitle checkedTag" : "services__listItemTitle"}>photography</h6>
        <p className={showSectionServices ? "services__listItemAbout checkedTag" : "services__listItemAbout"}>Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </li>
      <li className={showSectionServices ? "services__listItem checkedTag" : "services__listItem"}>
        <GraphSvg className={showSectionServices ? "services__listItemSvg checkedTag" : "services__listItemSvg"} />
        <h6 className={showSectionServices ? "services__listItemTitle checkedTag" : "services__listItemTitle"}>web design</h6>
        <p className={showSectionServices ? "services__listItemAbout checkedTag" : "services__listItemAbout"}>Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </li>
      <li className={showSectionServices ? "services__listItem checkedTag" : "services__listItem"}>
        <CompSvg className={showSectionServices ? "services__listItemSvg checkedTag" : "services__listItemSvg"} /> 
        <h6 className={showSectionServices ? "services__listItemTitle checkedTag" : "services__listItemTitle"}>creativity</h6>
        <p className={showSectionServices ? "services__listItemAbout checkedTag" : "services__listItemAbout"}>Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </li>
      <li className={showSectionServices ? "services__listItem checkedTag" : "services__listItem"}>
        <BookSvg className={showSectionServices ? "services__listItemSvg checkedTag" : "services__listItemSvg"}/>
        <h6 className={showSectionServices ? "services__listItemTitle checkedTag" : "services__listItemTitle"}>seo</h6>
        <p className={showSectionServices ? "services__listItemAbout checkedTag" : "services__listItemAbout"}>Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </li>
      <li className={showSectionServices ? "services__listItem checkedTag" : "services__listItem"}>
        <HomeSvg className={showSectionServices ? "services__listItemSvg checkedTag" : "services__listItemSvg"} />
        <h6 className={showSectionServices ? "services__listItemTitle checkedTag" : "services__listItemTitle"}>css/html</h6>
        <p className={showSectionServices ? "services__listItemAbout checkedTag" : "services__listItemAbout"}>Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </li>
      <li className={showSectionServices ? "services__listItem checkedTag" : "services__listItem"}>
        <ImageSvg className={showSectionServices ? "services__listItemSvg checkedTag" : "services__listItemSvg"} />
        <h6 className={showSectionServices ? "services__listItemTitle checkedTag" : "services__listItemTitle"}>digital</h6>
        <p className={showSectionServices ? "services__listItemAbout checkedTag" : "services__listItemAbout"}>Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor</p>
      </li>
    </ul>
  </section>
    );
};

export default SectionServices;