import React from 'react';
import { ReactComponent as AlarmSvg } from '../../images/sprite/ALARM.svg';
import { ReactComponent as GraphSvg } from '../../images/sprite/GRAPH.svg';
import { ReactComponent as CompSvg } from '../../images/sprite/COMPUTER.svg';
import { ReactComponent as BookSvg } from '../../images/sprite/BOOK.svg';
import { ReactComponent as HomeSvg } from '../../images/sprite/HOME.svg';
import { ReactComponent as ImageSvg } from '../../images/sprite/IMAGE.svg';
import './SectionServices.scss';

const SectionServices = () => {
    return (
        <section className="services">
    <h4 className="services__title">we work with</h4>
    <h5 className="services__subtitle">amazing services</h5>
    <ul className="services__list">
      <li className="services__listItem">
        <AlarmSvg className="services__listItemSvg"/> 
        <h6 className="services__listItemTitle">photography</h6>
        <p className="services__listItemAbout">Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </li>
      <li className="services__listItem">
        <GraphSvg className="services__listItemSvg" />
        <h6 className="services__listItemTitle">web design</h6>
        <p className="services__listItemAbout">Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </li>
      <li className="services__listItem">
        <CompSvg className="services__listItemSvg" /> 
        <h6 className="services__listItemTitle">creativity</h6>
        <p className="services__listItemAbout">Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </li>
      <li className="services__listItem">
        <BookSvg className="services__listItemSvg"/>
        <h6 className="services__listItemTitle">seo</h6>
        <p className="services__listItemAbout">Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </li>
      <li className="services__listItem">
        <HomeSvg className="services__listItemSvg" />
        <h6 className="services__listItemTitle">css/html</h6>
        <p className="services__listItemAbout">Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </li>
      <li className="services__listItem">
        <ImageSvg className="services__listItemSvg" />
        <h6 className="services__listItemTitle">digital</h6>
        <p className="services__listItemAbout">Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor</p>
      </li>
    </ul>
  </section>
    );
};

export default SectionServices;