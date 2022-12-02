import React from "react";
import "./Modal.scss";
import ApexGameImg from "../../assets/images/image 4.png";
import chat from "../../assets/images/chat_bubble.png";
import heart from "../../assets/images/heart.png";
import { useState } from "react";

const Modal = ({ open, onClose }) => {
  //   const [comments, setComments] = useState([
  //     {
  //       avatar: URL(""),
  //       usename: "Dion L.",
  //       comment: "Brilliant!",
  //     },
  //     {
  //       avatar: URL(""),
  //       usename: "SlayerXXX",
  //       comment: "Runnnnnnnn :o :o :o",
  //     },
  //     {
  //       avatar: URL(""),
  //       usename: "UnKnownSS",
  //       comment: "Cool",
  //     },
  //   ]);
  if (!open) return null;
  //   const onSubmit = () => {
  //     const commentArr = [...comments];
  //   };

  return (
    <div className="modal">
      <div className="modal__display">
        <section className="modal__banner">
          <p className="modal__banner-text">
            https://ea.com/community/sharedfiles/details/?id-213827138217
          </p>
          <img
            className="modal__banner-close-btn"
            src=""
            alt="close button"
            onClick={onClose}
          />
        </section>
        <section className="modal__content-wrap">
          <img src={ApexGameImg} className="modal__content-video-img"></img>
          <div className="modal__content-comment-wrap">
            <img
              className="modal__content-comment-avatar"
              src=""
              alt="user avatar"
            />
            <div className="modal__content-comment-section">
              <p className="modal__content-comment-user-name">ApexHuntress</p>
              <p className="modal__content-comment-user-status">Offline</p>
              <div className="modal__content-action-bar">
                <img src={chat} className="modal__content-icon" />
                <p className="modal__content-icon-text">9.3k Comments</p>
                <img
                  src=""
                  className="modal__content-icon"
                  alt="share button"
                />
                <p className="modal__content-icon-text">Share</p>
                <img src={heart} className="modal__content-icon" />
                <p className="modal__content-icon-text">1.8k</p>
              </div>
              <form action="" className="modal__content-comment-form">
                <input
                  type="comment-input"
                  className="modal__content-comment-input"
                  placeholder="What are your thoughts?"
                />
                <button className="modal__content-comment-submit-btn">
                  Comment
                </button>
              </form>
              <div className="modal__content-comment-display">
                <div>comment 1</div>
                <div>comment 2</div>
                <div>comment 3</div>
              </div>
              <button className="modal__content-view-more-comments">
                View 9327 Comments
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
