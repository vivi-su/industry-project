import React from "react";
import "./Post.scss";
import likesIcon from "../../assets/icons/heart.svg";
import commentsIcon from "../../assets/icons/chat_bubble.svg";
import ApexGameImg from "../../assets/images/image 4.png";
import Modal from "../modal/Modal-backup";
import { useState, useRef } from "react";
import heart from "../../assets/images/heart.png";
import heartfilled from "../../assets/images/heart-filled.png";
import search from "../../assets/images/magnifyingglass.png";

const Post = () => {
  const [openModal, setOpenModal] = useState(false);
  const [like, setLike] = useState(999);
  const [clickMode, setClickMode] = useState(false);
  const ref = useRef();

  return (
    <>
      <main className="post">
        <section className="post__header">
          <ol className="post__header-list">
            <li className="post__header-list-item">Popular</li>
            <li className="post__header-list-item">Gallery</li>
            <li className="post__header-list-item">Broadcast</li>
            <li className="post__header-list-item">News</li>
            <li className="post__header-list-item">Guides</li>
            <li className="post__header-list-item">Reviews</li>
          </ol>
        </section>
        <section className="post__items-wrap">
          <div className="post__items-hero">
            <section className="post__left-feature">
              <img
                src={ApexGameImg}
                className="post__video-img"
                alt="video"
              ></img>
              <div className="post__lower">
                <div className="post__comm-like">
                  <img
                    src={commentsIcon}
                    className="post__icon1 post__icon1--chat "
                    alt="chat"
                    onClick={() => setOpenModal(true)}
                  ></img>
                  <span
                    className="post__chat"
                    alt="chat"
                    onClick={() => setOpenModal(true)}
                  >
                    9.3k Comments
                  </span>

                  <div className="post__heart1">
                    <img
                      onClick={() => {
                        setClickMode(true);
                        setLike(like + 1);
                      }}
                      src={clickMode ? heartfilled : heart}
                      className="post__icon1"
                      alt="heart"
                    ></img>

                    {like}
                  </div>
                </div>
                <div
                  className="post__game-text"
                  onClick={() => setOpenModal(true)}
                >
                  Apex-Huntress
                </div>
              </div>
            </section>
          </div>

          <aside className="post__additional-info">
            <div className="post__additional-info-search-bars">
              <div className="post__additional-info-find-friends">
                <p className="post__additional-info-text">Find Friends</p>
                <div className="post__additional-info-search">
                  <img
                    className="post__additional-info-logo"
                    src={search}
                    alt="searchbar"
                  ></img>
                  <p className="post__additional-info-search-textss">
                    Search for friends
                  </p>
                </div>
              </div>
              <div className="post__additional-info-find-base">
                <p className="post__additional-info-text"> Find Base and Hub</p>
                <div className="post__additional-info-search">
                  <img
                    className="post__additional-info-logo"
                    src={search}
                    alt="searchbar"
                  ></img>
                  <p className="post__additional-info-search-textss">
                    Search for Hub
                  </p>
                </div>
              </div>
            </div>
            <div className="post__additional-info-popular-hubs">
              <p className="post__additional-info-popular-hubs-title">
                Popular Hubs
              </p>
              <p className="post__additional-info-popular-hubs-list">Fifa 23</p>
              <p className="post__additional-info-popular-hubs-list">
                Battlefield 2042
              </p>
              <p className="post__additional-info-popular-hubs-list">Apex</p>
              <p className="post__additional-info-popular-hubs-list">NFL 22</p>
              <p className="post__additional-info-popular-hubs-list">
                Grid Legends
              </p>
              <p className="post__additional-info-popular-hubs-list">AFK</p>
            </div>
          </aside>
        </section>
      </main>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      />
    </>
  );
};

export default Post;
