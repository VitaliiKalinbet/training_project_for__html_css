import React from 'react';
import Header from '../Header/Header';
import SectionServices from '../SectionServices/SectionServices';
import SectionTeam from '../SectionTeam/SectionTeam';
import Footer from '../Footer/Footer';
import './Content.scss';

const Content = () => {
    return (
        <section className="contentContainer">
          <Header />
          <main>
            <SectionServices />
            <SectionTeam />
          </main>
          <Footer />
        </section>
    );
};

export default Content;