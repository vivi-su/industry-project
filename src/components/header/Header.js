import { useState } from "react";
import ea from "../../assets/icons/group.svg";
import question from "../../assets/icons/question.svg";
import user from "../../assets/icons/person.svg";
import accessiblility from "../../assets/icons/Web Accessibility.svg";
import sandwitch from "../../assets/images/sandwitch.jpg";
import logo from "../../assets/icons/electronic-arts.png";
import close from "../../assets/images/close.jpg";
import dropDown from "../../assets/images/drop-down.jpg";
import dot from "../../assets/images/dot.jpg";
import Main from "../main/Main";
import "./Header.scss";

export default function Header() {
  const [sideBar, setSideBar] = useState(false);
  const [secondHeader, setSecondHeader] = useState(true);

  const toggleOpen = () => {
    setSideBar(true);
    setSecondHeader(false);
  };

  const toggleClose = () => {
    setSideBar(false);
    setSecondHeader(true);
  };

  return (
    <>
      <section className="header">
        <header className="header__one">
          <nav className="header__first-nav">
            <li className="header__list">
              <img
                src={accessiblility}
                alt="accessiblility"
                className="header__icon-accessiblility"
              ></img>
            </li>

            <li className="header__list">
              <img src={user} alt="user" className="header__icon-user"></img>
            </li>
            <li className="header__list">
              <img
                src={question}
                alt="question"
                className="header__icon-question"
              ></img>
            </li>
            <li className="header__list">
              <img src={ea} alt="EA logo" className="header__icon-ea"></img>
            </li>
          </nav>
        </header>

        {secondHeader && (
          <section className="header__two">
            <button onClick={toggleOpen}>
              <img
                src={sandwitch}
                alt="select bars"
                className="header__sandwitch"
              ></img>
              <img src={dot} alt="dot icon" className="header__dot"></img>
            </button>
            <img src={logo} alt="logo" className="header__logo"></img>

            <nav className="header__nav-desktop">
              <li className="header__nav-desktop--li">
                <p className="header__li-inline">Games</p>
                <img
                  className="header__li-inline header__li-drop-down"
                  src={dropDown}
                  alt="drop down"
                ></img>
              </li>
              <li className="header__nav-desktop--li">
                <p className="header__li-inline">More Experiences</p>
                <img
                  className="header__li-inline header__li-drop-down"
                  src={dropDown}
                  alt="drop down"
                ></img>
              </li>
              <li className="header__nav-desktop--li">
                <p className="header__li-inline">About</p>
                <img
                  className="header__li-inline header__li-drop-down"
                  src={dropDown}
                  alt="drop down"
                ></img>
              </li>
              <li className="header__nav-desktop--li">
                <p className="header__li-inline">Commiments</p>
                <img
                  className="header__li-inline header__li-drop-down"
                  src={dropDown}
                  alt="drop down"
                ></img>
              </li>
              <li className="header__nav-desktop--li">
                <p className="header__li-inline">Resources</p>
                <img
                  className="header__li-inline header__li-drop-down"
                  src={dropDown}
                  alt="drop down"
                ></img>
              </li>
            </nav>
          </section>
        )}
        {sideBar && (
          <aside className="header__left-bar">
            <div className="header__top-wrapper">
              <img src={logo} alt="logo" className="header__logo"></img>
              <button onClick={toggleClose}>
                <img src={close} alt="close"></img>
              </button>
            </div>
            <nav className="header__second-nav">
              <li className="header__second-list">Game</li>
              <li className="header__second-list">News</li>
              <li className="header__second-list">Messages</li>
            </nav>
          </aside>
        )}

        <section className={`${sideBar ? "header__grey-out" : ""}`}>
          <Main />
        </section>
      </section>
    </>
  );
}
