import React from "react";
import { ReactComponent as AlarmSvg } from "../../images/sprite/ALARM.svg";
import { ReactComponent as GraphSvg } from "../../images/sprite/GRAPH.svg";
import { ReactComponent as CompSvg } from "../../images/sprite/COMPUTER.svg";
import { ReactComponent as BookSvg } from "../../images/sprite/BOOK.svg";
import { ReactComponent as HomeSvg } from "../../images/sprite/HOME.svg";
import { ReactComponent as ImageSvg } from "../../images/sprite/IMAGE.svg";
import "./SectionServices.scss";

const SectionServices = ({ showSectionServices, showBem }) => {
  return (
    <section className={showSectionServices ? "services checked" : "services"}>
      <header className={showBem ? "heading checkedTagBem" : "heading" }>
        {showBem && <span className="heading__absoluteClassHeading">heading</span>}
        <h3
          className={
            showSectionServices
              ? "heading__subtitle heading__subtitle--green checkedTag"
              : "heading__subtitle heading__subtitle--green"
          }
        >
          we work with
        </h3>
        {showBem && <span className="heading__absoluteClassSubTitle">heading__subtitle heading__subtitle--green</span>}
        <h2
          className={
            showSectionServices
              ? "heading__title heading__title--green checkedTag"
              : "heading__title heading__title--green"
          }
        >
          amazing services
        </h2>
        {showBem && <span className="heading__absoluteClassTitle">heading__title heading__title--green</span>}
        {showBem && <span className="heading__absoluteClassTitleAfter">heading__title--green:after</span>}
      </header>
      <ul
        className={
          showSectionServices ? "services__list checkedTag" : "services__list"
        }
      >
        <li
          className={
            showSectionServices
              ? "services__listItem checkedTag"
              : "services__listItem"
          }
        >
          <AlarmSvg
            className={
              showSectionServices
                ? "services__listItemSvg checkedTag"
                : "services__listItemSvg"
            }
          />
          <h6
            className={
              showSectionServices
                ? "services__listItemTitle checkedTag"
                : "services__listItemTitle"
            }
          >
            photography
          </h6>
          <p
            className={
              showSectionServices
                ? "services__listItemAbout checkedTag"
                : "services__listItemAbout"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </li>
        <li
          className={
            showSectionServices
              ? "services__listItem checkedTag"
              : "services__listItem"
          }
        >
          <GraphSvg
            className={
              showSectionServices
                ? "services__listItemSvg checkedTag"
                : "services__listItemSvg"
            }
          />
          <h6
            className={
              showSectionServices
                ? "services__listItemTitle checkedTag"
                : "services__listItemTitle"
            }
          >
            web design
          </h6>
          <p
            className={
              showSectionServices
                ? "services__listItemAbout checkedTag"
                : "services__listItemAbout"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </li>
        <li
          className={
            showSectionServices
              ? "services__listItem checkedTag"
              : "services__listItem"
          }
        >
          <CompSvg
            className={
              showSectionServices
                ? "services__listItemSvg checkedTag"
                : "services__listItemSvg"
            }
          />
          <h6
            className={
              showSectionServices
                ? "services__listItemTitle checkedTag"
                : "services__listItemTitle"
            }
          >
            creativity
          </h6>
          <p
            className={
              showSectionServices
                ? "services__listItemAbout checkedTag"
                : "services__listItemAbout"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </li>
        <li
          className={
            showSectionServices
              ? "services__listItem checkedTag"
              : "services__listItem"
          }
        >
          <BookSvg
            className={
              showSectionServices
                ? "services__listItemSvg checkedTag"
                : "services__listItemSvg"
            }
          />
          <h6
            className={
              showSectionServices
                ? "services__listItemTitle checkedTag"
                : "services__listItemTitle"
            }
          >
            seo
          </h6>
          <p
            className={
              showSectionServices
                ? "services__listItemAbout checkedTag"
                : "services__listItemAbout"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </li>
        <li
          className={
            showSectionServices
              ? "services__listItem checkedTag"
              : "services__listItem"
          }
        >
          <HomeSvg
            className={
              showSectionServices
                ? "services__listItemSvg checkedTag"
                : "services__listItemSvg"
            }
          />
          <h6
            className={
              showSectionServices
                ? "services__listItemTitle checkedTag"
                : "services__listItemTitle"
            }
          >
            css/html
          </h6>
          <p
            className={
              showSectionServices
                ? "services__listItemAbout checkedTag"
                : "services__listItemAbout"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </li>
        <li
          className={
            showSectionServices
              ? "services__listItem checkedTag"
              : "services__listItem"
          }
        >
          <ImageSvg
            className={
              showSectionServices
                ? "services__listItemSvg checkedTag"
                : "services__listItemSvg"
            }
          />
          <h6
            className={
              showSectionServices
                ? "services__listItemTitle checkedTag"
                : "services__listItemTitle"
            }
          >
            digital
          </h6>
          <p
            className={
              showSectionServices
                ? "services__listItemAbout checkedTag"
                : "services__listItemAbout"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </li>
      </ul>
    </section>
  );
};

export default SectionServices;
