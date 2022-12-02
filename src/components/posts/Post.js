import React from "react";
import "./Post.scss";
import likesIcon from "../../assets/icons/heart.svg";
import commentsIcon from "../../assets/icons/chat_bubble.svg";
import ApexGameImg from "../../assets/images/image 4.png";

const post = () => {
  return (
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
          <img
            className="post__items-img"
            src={ApexGameImg}
            alt="apex gaming images"
          />
          <div className="post__items-info-bar">
            <p className="post__items-username">Apex-Huntress</p>
            <div className="post__items-comments-likes-wrap">
              <img
                src={commentsIcon}
                alt="comments icon"
                className="post__items-comments-icon"
              />
              <p className="post__items-comments-count">9.3k</p>
              <img
                src={likesIcon}
                alt="likes icon"
                className="post__items-likes-icon"
              />
              <p className="post__items-likes-count">1.8k</p>
            </div>
          </div>
        </div>

        <aside className="post__additional-info">
          <div className="post__additional-info-find-friends">Find Friends</div>
          <div className="post__additional-info-find-base">
            Find Base and Hub
          </div>
          <div className="post__additional-info-popular-hubs">Popular Hubs</div>
        </aside>

        <div className="post__items">
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
        </div>
        <div className="post__items">
          <img className="post__items-img" src="" alt=" gaming images" />
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
        </div>
        <div className="post__items">
          <img className="post__items-img" src="" alt=" gaming images" />
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
        </div>
        <div className="post__items">
          <img className="post__items-img" src="" alt=" gaming images" />
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
        </div>
        <div className="post__items">
          <img className="post__items-img" src="" alt=" gaming images" />
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
        </div>
      </section>
    </main>
  );
};

export default post;
