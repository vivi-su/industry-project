import {useState} from "react";
import ea from "../../assets/images/ea.jpg";
import question from "../../assets/images/question.jpg"
import user from "../../assets/images/user.jpg";
import sandwitch from "../../assets/images/sandwitch.jpg"
import logo from "../../assets/images/logo.jpg";
import close from "../../assets/images/close.jpg";
import dropDown from "../../assets/images/drop-down.jpg";
import dot from "../../assets/images/dot.jpg";
import "./Header.scss";

export default function Header (){
    const [sideBar, setSideBar]=useState(false);
    const [secondHeader, setSecondHeader]=useState(true);

    const toggleOpen=()=>{
        setSideBar(true);
        setSecondHeader(false);
    }

    const toggleClose=()=>{
        setSideBar(false);
        setSecondHeader(true);
    }

    return (
      <>
        <section className="header">
          <header className="header__one">
            <nav className="header__first-nav">
              <li className="header__list">
                <img src={user} alt="user"></img>
              </li>
              <li className="header__list">
                <img src={question} alt="question"></img>
              </li>
              <li className="header__list">
                <img src={ea} alt="EA logo"></img>
              </li>
            </nav>
          </header>

          {secondHeader&&
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
          }
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
        </section>
      </>
    );
}