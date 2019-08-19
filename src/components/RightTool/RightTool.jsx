import React from 'react';
import { Link } from 'react-scroll';
import s from './RightTool.module.css';

const RightTool = ({toggleBem, showBem}) => {
    return (
        <div className={s.toolSection}>
            <div className={s.fixedContainer}>
                <Link to="services" spy={true} smooth={true} offset={-60} duration={1000} delay={10}>
                    <button onClick={toggleBem} className={showBem ? s.checkedButton : s.button}>
                        {showBem ? "hide BEM" : "show BEM"}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RightTool;