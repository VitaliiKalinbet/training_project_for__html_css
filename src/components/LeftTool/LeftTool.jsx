import React from 'react';
import { Link } from 'react-scroll';
import s from './LeftTool.module.css';

const LeftTool = ({ toggleHeader, toggleMain, toggleFooter, toggleSectionServices, toggleshowSectionTeam, showHeader, showMain, showFooter, showSectionServices, showSectionTeam }) => {
    return (
        <div className={s.toolSection}>
            <div className={s.fixedContainer}>
                <Link to="header" spy={true} smooth={true} offset={-50} duration={1000} delay={10}>
                    <button onClick={toggleHeader} className={showHeader ? s.checkedButton : s.button}>
                        {showHeader ? "hide header" : "show header"}
                    </button>
                </Link>
                <Link to="footer" spy={true} smooth={true} offset={-50} duration={1000} delay={10}>
                    <button onClick={toggleMain} className={showMain ? s.checkedButton : s.button}>
                        {showMain ? "hide main" : "show main"}
                    </button>
                </Link>
                <Link to="services" spy={true} smooth={true} offset={-50} duration={1000} delay={10}>
                    <button onClick={toggleSectionServices} className={showSectionServices ? s.checkedButton : s.button}>
                        {showSectionServices ? "hide section Services" : "show section Services"}
                    </button>
                </Link>
                <Link to="team" spy={true} smooth={true} offset={-50} duration={1000} delay={10}>
                    <button onClick={toggleshowSectionTeam} className={showSectionTeam ? s.checkedButton : s.button}>
                        {showSectionTeam ? "hide section Team" : "show section Team"}
                    </button>
                </Link>
                <Link to="footer" spy={true} smooth={true} offset={-50} duration={1000} delay={10}>
                    <button onClick={toggleFooter} className={showFooter ? s.checkedButton : s.button}>
                        {showFooter ? "hide footer" : "show footer"}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LeftTool;