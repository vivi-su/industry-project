import React from "react";
import "./Post.scss";

const post = () => {
  return (
    <section className="post">
      <div className="post__header">
        <ol className="post__header-list">
          <li className="post__header-list-item">Popular</li>
          <li className="post__header-list-item">Gallery</li>
          <li className="post__header-list-item">Broadcast</li>
          <li className="post__header-list-item">News</li>
          <li className="post__header-list-item">Guides</li>
          <li className="post__header-list-item">Reviews</li>
        </ol>
      </div>
      <div className="post__items-wrap">
        <div className="post__items">
          <img src="" alt="apex gaming images" />
          <div className="post__items-info-bar">
            <p className="post__items-username">Apex-Huntress</p>
            <div className="post__items-comments-likes-wrap">
              <img
                src=""
                alt="comments icon"
                className="post__items-commentsIcon"
              />
              <p className="post__items-comment-count">9.3k</p>
              <img src="" alt="likes icon" className="post__items-likesIcon" />
              <p className="post__items-likes-count">1.8k</p>
            </div>
          </div>
        </div>
        <div className="post__items"></div>
        <div className="post__items"></div>
        <div className="post__items"></div>
        <div className="post__items"></div>
        <div className="post__items"></div>
        <div className="post__items"></div>
      </div>
    </section>
  );
};

export default post;
