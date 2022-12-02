import React from "react";
import "./Post.scss";
// import likesIcon from "../../assets/icons/heart.svg";
// import commentsIcon from "../../assets/icons/chat_bubble.svg";
import ApexGameImg from "../../assets/images/image 4.png";
import Modal from "../modal/Modal-backup";
import { useState } from "react";
import chat from "../../assets/images/chat_bubble.png";
import heart from "../../assets/images/heart.png";
import search from "../../assets/images/magnifyingglass.png";

const Post = () => {
  const [openModal, setOpenModal] = useState(false);

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
          <div
            className="post__items-hero"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <div className="post__upper-video">
              <img src={ApexGameImg} className="post__video-img"></img>
            </div>
            <div className="post__lower">
              <div className="post__comm-like">
                <img src={chat} className="post__icon1" />
                <p className="post__comm1">9.3k Comments</p>
                <img src={heart} className="post__icon1" />
                <p className="post__heart1">1.8k</p>
              </div>
              <div className="post__game-text">Apex-Huntress</div>
            </div>
          </div>

          <aside className="post__additional-info">
            <div className="post__additional-info-search-bars">
              <div className="post__additional-info-find-friends">
                <p className="post__additional-info-text">Find Friends</p>
                <textarea
                  name=""
                  id=""
                  className="post__additional-info-search"
                  placeholder="Search for friends"
                />
                {/* <div className="post__additional-info-search">
                  <img
                    className="post__additional-info-logo"
                    src={search}
                    alt="searchbar"
                  />
                  <p className="post__additional-info-search-textss">
                    Search for friends
                  </p>
                </div> */}
              </div>
              <div className="post__additional-info-find-base">
                <p className="post__additional-info-text"> Find Base and Hub</p>
                <textarea
                  name=""
                  id=""
                  className="post__additional-info-search"
                  placeholder="Search for Hub"
                />
                {/* <div className="post__additional-info-search">
                  <img
                    className="post__additional-info-logo"
                    src={search}
                    alt="searchbar"
                  ></img>
                  <p className="post__additional-info-search-textss">
                    Search for Hub
                  </p>
                </div> */}
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
          {/* <div className="post__items">
            <img className="post__items-img" src="" alt="gaming images" />
            <div className="post__items-info-bar">
              <p className="post__items-username">User Name</p>
              <div className="post__items-comments-likes-wrap">
                <img
                  src={commentsIcon}
                  alt="comments icon"
                  className="post__items-comments-icon"
                />
                <p className="post__items-comments-count">##</p>
                <img
                  src={likesIcon}
                  alt="likes icon"
                  className="post__items-likes-icon"
                />
                <p className="post__items-likes-count">##</p>
              </div>
            </div>
          </div> */}
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
