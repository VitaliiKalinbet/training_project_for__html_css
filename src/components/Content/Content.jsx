import React from 'react';
import { Element } from 'react-scroll'
import Header from '../Header/Header';
import SectionServices from '../SectionServices/SectionServices';
import SectionTeam from '../SectionTeam/SectionTeam';
import Footer from '../Footer/Footer';
import './Content.scss';

const Content = ({ showHeader, showMain, showFooter, showSectionServices, showSectionTeam }) => {
    return (
        <section className="contentContainer">
          <Element name="header">
            <Header showHeader={showHeader}/>
          </Element>
          <Element name="main">
            <main className = {showMain ? "checked" : null}>
              <Element name="services">
                <SectionServices />
              </Element>
              <Element name="team">
                <SectionTeam />
              </Element>
            </main>
          </Element>
          <Element name="footer">
            <Footer />
          </Element>
        </section>
    );
};

export default Content;